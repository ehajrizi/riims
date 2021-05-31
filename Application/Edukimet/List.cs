using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using DatabaseLogic;

namespace Application.Edukimet
{
    public class List
    {
        public class Query : IRequest<List<Edukimi>> { }

        public class Handler : IRequestHandler<Query, List<Edukimi>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Edukimi>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Edukimet.ToListAsync();
            }
        }
    }
}