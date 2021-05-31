using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using DatabaseLogic;

namespace Application.Eksperiencat
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
                var eksperienca = await _context.Eksperiencat.FindAsync(request.Id); 
                _context.Remove(eksperienca);//e hek prej memories

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}