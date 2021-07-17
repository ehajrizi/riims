using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using DatabaseLogic;
using FluentValidation;
using Application.Interfaces;
using Microsoft.EntityFrameworkCore;
using Application.Core;

namespace Application.Specializimet
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Specializimi Specializimi { get; set; }
        }
        public class CommandValidatior : AbstractValidator<Command>
        {
            public CommandValidatior()
            {
                RuleFor(x => x.Specializimi).SetValidator(new SpecializimiValidator());
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

                var specializimi = new Specializimi
                {
                    User = user,
                    UseriId = user.Id,
                    Titulli = request.Specializimi.Titulli,
                    EmriInstitucionit = request.Specializimi.EmriInstitucionit,
                    Lokacioni = request.Specializimi.Lokacioni,
                    DataFillestare = request.Specializimi.DataFillestare,
                    DataPerfundimtare = request.Specializimi.DataPerfundimtare,
                    Pershkrimi = request.Specializimi.Pershkrimi,
                };

                _context.Specializimet.Add(specializimi);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failed");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
