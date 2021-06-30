using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using DatabaseLogic;

namespace Application.Gjuhet
{
    public class List
    {
        public class Query : IRequest<List<Gjuha>> { }

        public class Handler : IRequestHandler<Query, List<Gjuha>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Gjuha>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Gjuhet.ToListAsync();
            }
        }
    }
}