using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using DatabaseLogic;
using FluentValidation;
using Application.Interfaces;
using Microsoft.EntityFrameworkCore;
using Application.Core;

namespace Application.Donatoret
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Donatori Donatori { get; set; }
        }
        public class CommandValidatior : AbstractValidator<Command>
        {
            public CommandValidatior()
            {
                RuleFor(x => x.Donatori).SetValidator(new DonatoriValidator());
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

                var donatori = new Donatori
                {
                    User = user,
                    UseriId = user.Id,
                    EmriIDonatorit = request.Donatori.EmriIDonatorit,
                    PershkrimiDonatorit = request.Donatori.PershkrimiDonatorit,
                    KontributiIDhene = request.Donatori.KontributiIDhene,
                };

                _context.Donatoret.Add(donatori);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failed");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
