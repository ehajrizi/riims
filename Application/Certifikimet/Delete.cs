using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using DatabaseLogic;

namespace Application.Certifikimet
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var certifikimi = await _context.Certifikimet.FindAsync(request.Id);

                _context.Remove(certifikimi);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}