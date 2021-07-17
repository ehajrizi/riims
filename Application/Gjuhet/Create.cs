using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using DatabaseLogic;
using FluentValidation;
using Application.Interfaces;
using Microsoft.EntityFrameworkCore;
using Application.Core;

namespace Application.Gjuhet
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Gjuha Gjuha { get; set; }
        }
        public class CommandValidatior : AbstractValidator<Command>
        {
            public CommandValidatior()
            {
                RuleFor(x => x.Gjuha).SetValidator(new GjuhaValidator());
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

                var gjuha = new Gjuha
                {
                    User = user,
                    UseriId = user.Id,
                    ZgjedhGjuha = request.Gjuha.ZgjedhGjuha,
                    Folur = request.Gjuha.Folur,
                    Shkruar = request.Gjuha.Shkruar,
                };

                _context.Gjuhet.Add(gjuha);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failed");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
