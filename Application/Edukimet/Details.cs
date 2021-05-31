using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using DatabaseLogic;

namespace Application.Edukimet
{
    public class Details
    {
        public class Query : IRequest<Edukimi>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Edukimi>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Edukimi> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Edukimet.FindAsync(request.Id);
            }
        }
    }
}