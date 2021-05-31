using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using DatabaseLogic;

namespace Application.Eksperiencat
{
    public class Details
    {
        public class Query : IRequest<Eksperienca>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Eksperienca>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;

            }

            public async Task<Eksperienca> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Eksperiencat.FindAsync(request.Id);
            }
        }
    }
}