using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using DatabaseLogic;

namespace Application.Isbnt
{
    public class List
    {
        public class Query : IRequest<List<Isbn>> { }

        public class Handler : IRequestHandler<Query, List<Isbn>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Isbn>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Isbnt.ToListAsync();
            }
        }
    }
}