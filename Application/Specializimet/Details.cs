using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using DatabaseLogic;

namespace Application.Specializimet
{
    public class Details
    {
        public class Query : IRequest<Specializimi>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Specializimi>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Specializimi> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Specializimet.FindAsync(request.Id);
            }
        }
    }
}