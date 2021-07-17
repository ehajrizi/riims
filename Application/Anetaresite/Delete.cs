using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using DatabaseLogic;
using Application.Core;

namespace Application.Anetaresite
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
                var anetaresia = await _context.Anetaresite.FindAsync(request.Id);

                _context.Remove(anetaresia);

                var result = await _context.SaveChangesAsync() > 0;

                if(!result) return Result<Unit>.Failure("Failed");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}