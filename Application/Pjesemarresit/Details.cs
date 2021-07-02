using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using DatabaseLogic;

namespace Application.Pjesemarresit
{
    public class Details
    {
        public class Query : IRequest<Pjesemarresi>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Pjesemarresi>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Pjesemarresi> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Pjesemarresit.FindAsync(request.Id);
            }
        }
    }
}