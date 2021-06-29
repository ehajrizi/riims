using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using DatabaseLogic;

namespace Application.Projektet
{
    public class Create
    {
        public class Command : IRequest
        {
            public Projekti Projekti { get; set; }
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
                _context.Projektet.Add(request.Projekti);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}