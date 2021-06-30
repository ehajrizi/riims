using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using DatabaseLogic;

namespace Application.Gjuhet
{
    public class Details
    {
        public class Query : IRequest<Gjuha>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Gjuha>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Gjuha> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Gjuhet.FindAsync(request.Id);
            }
        }
    }
}