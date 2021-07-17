using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using DatabaseLogic;
using FluentValidation;
using Application.Interfaces;
using Microsoft.EntityFrameworkCore;
using Application.Core;

namespace Application.Eksperiencat
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Eksperienca Eksperienca { get; set; }
        }
        public class CommandValidatior : AbstractValidator<Command>
        {
            public CommandValidatior()
            {
                RuleFor(x => x.Eksperienca).SetValidator(new EksperiencaValidator());
            }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IUserAccessor _userAccessor;
            public Handler(DataContext context, IUserAccessor userAccessor)
            {
                _userAccessor = userAccessor;
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var user = await _context.Users.FirstOrDefaultAsync(x => x.Id == _userAccessor.GetId());

                var eksperienca = new Eksperienca
                {
                    User = user,
                    UseriId = user.Id,
                    EmriInstitucionit = request.Eksperienca.EmriInstitucionit,
                    Titulli = request.Eksperienca.Titulli,
                    PunePrimare = request.Eksperienca.PunePrimare,
                    Lokacioni = request.Eksperienca.Lokacioni,
                    DataFillestare = request.Eksperienca.DataFillestare,
                    DataPerfundimtare = request.Eksperienca.DataPerfundimtare,
                    Pershkrimi = request.Eksperienca.Pershkrimi,
                    PersoniKontaktues = request.Eksperienca.PersoniKontaktues,
                    Email = request.Eksperienca.Email,
                    NumriTelefonit = request.Eksperienca.NumriTelefonit,
                };

                _context.Eksperiencat.Add(eksperienca);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failed");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
