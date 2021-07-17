using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using DatabaseLogic;
using FluentValidation;
using Application.Interfaces;
using Microsoft.EntityFrameworkCore;
using Application.Core;

namespace Application.Anetaresite
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Anetaresia Anetaresia { get; set; }
        }
        public class CommandValidatior : AbstractValidator<Command>
        {
            public CommandValidatior()
            {
                RuleFor(x => x.Anetaresia).SetValidator(new AnetaresiaValidator());
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

                var anetaresia = new Anetaresia
                {
                    User = user,
                    UseriId = user.Id,
                    EmriInstOrg = request.Anetaresia.EmriInstOrg,
                    Pozita = request.Anetaresia.Pozita,
                    Pershkrimi = request.Anetaresia.Pershkrimi,
                };

                _context.Anetaresite.Add(anetaresia);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failed to create activity");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
