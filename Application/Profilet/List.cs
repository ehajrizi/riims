using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using DatabaseLogic;

namespace Application.Profilet
{
    public class List
    {
        public class Query : IRequest<List<Profili>> { }

        public class Handler : IRequestHandler<Query, List<Profili>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Profili>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Profilet.ToListAsync();
            }
        }
    }
}