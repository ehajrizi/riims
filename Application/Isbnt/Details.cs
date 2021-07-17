using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using DatabaseLogic;

namespace Application.Isbnt
{
    public class Details
    {
        public class Query : IRequest<Isbn>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Isbn>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Isbn> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Isbnt.FindAsync(request.Id);
            }
        }
    }
}