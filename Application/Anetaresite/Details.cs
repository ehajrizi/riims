using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using DatabaseLogic;

namespace Application.Anetaresite
{
    public class Details
    {
        public class Query : IRequest<Anetaresia>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Anetaresia>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Anetaresia> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Anetaresite.FindAsync(request.Id);
            }
        }
    }
}