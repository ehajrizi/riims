using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using DatabaseLogic;
using Application.Core;

namespace Application.Pjesemarresit
{
    public class Delete
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var pjesemarresi = await _context.Pjesemarresit.FindAsync(request.Id);

                _context.Remove(pjesemarresi);

                var result = await _context.SaveChangesAsync() > 0;

                if(!result) return Result<Unit>.Failure("Failed");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}