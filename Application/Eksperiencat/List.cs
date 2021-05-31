using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using DatabaseLogic;

namespace Application.Eksperiencat
{
    public class List
    {
         public class Query : IRequest<List<Eksperienca>> { }

        public class Handler : IRequestHandler<Query, List<Eksperienca>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Eksperienca>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Eksperiencat.ToListAsync();
            }
        }
    }
}