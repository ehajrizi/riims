using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using DatabaseLogic;
using FluentValidation;
using Application.Interfaces;
using Microsoft.EntityFrameworkCore;
using Application.Core;

namespace Application.Certifikimet
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Certifikimi Certifikimi { get; set; }
        }
        public class CommandValidatior : AbstractValidator<Command>
        {
            public CommandValidatior()
            {
                RuleFor(x => x.Certifikimi).SetValidator(new CertifikimiValidator());
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

                var certifikimi = new Certifikimi
                {
                    User = user,
                    UseriId = user.Id,
                    Emri_Institucionit = request.Certifikimi.Emri_Institucionit,
                    Titulli = request.Certifikimi.Titulli,
                    Lokacioni = request.Certifikimi.Lokacioni,
                    DataFillestare = request.Certifikimi.DataFillestare,
                    DataPerfundimtare = request.Certifikimi.DataPerfundimtare,
                    Pershkrimi = request.Certifikimi.Pershkrimi,
                };

                _context.Certifikimet.Add(certifikimi);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failed to create activity");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
