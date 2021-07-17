using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using DatabaseLogic;
using FluentValidation;
using Application.Interfaces;
using Microsoft.EntityFrameworkCore;
using Application.Core;

namespace Application.Pjesemarresit
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Pjesemarresi Pjesemarresi { get; set; }
        }
        public class CommandValidatior : AbstractValidator<Command>
        {
            public CommandValidatior()
            {
                RuleFor(x => x.Pjesemarresi).SetValidator(new PjesemarresiValidator());
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

                var pjesemarresi = new Pjesemarresi
                {
                    User = user,
                    UseriId = user.Id,
                    EmriIPjesemarresit = request.Pjesemarresi.EmriIPjesemarresit,
                    roli = request.Pjesemarresi.roli,
                };

                _context.Pjesemarresit.Add(pjesemarresi);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failed");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
