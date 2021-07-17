using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using DatabaseLogic;
using FluentValidation;
using Application.Interfaces;
using Microsoft.EntityFrameworkCore;
using Application.Core;

namespace Application.Edukimet
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Edukimi Edukimi { get; set; }
        }
        public class CommandValidatior : AbstractValidator<Command>
        {
            public CommandValidatior()
            {
                RuleFor(x => x.Edukimi).SetValidator(new EdukimiValidator());
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

                var edukimi = new Edukimi
                {
                    User = user,
                    UseriId = user.Id,
                    Emri_i_Institucionit = request.Edukimi.Emri_i_Institucionit,
                    Titulli = request.Edukimi.Titulli,
                    Fusha_e_Studimit = request.Edukimi.Fusha_e_Studimit,
                    Lokacioni = request.Edukimi.Lokacioni,
                    DataFillestare = request.Edukimi.DataFillestare,
                    DataPerfundimtare = request.Edukimi.DataPerfundimtare,
                    Pershkrimi = request.Edukimi.Pershkrimi,
                };

                _context.Edukimet.Add(edukimi);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failed");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
