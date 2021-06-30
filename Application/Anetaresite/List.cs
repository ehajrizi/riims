using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using DatabaseLogic;

namespace Application.Anetaresite
{
    public class List
    {
        public class Query : IRequest<List<Anetaresia>> { }

        public class Handler : IRequestHandler<Query, List<Anetaresia>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Anetaresia>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Anetaresite.ToListAsync();
            }
        }
    }
}