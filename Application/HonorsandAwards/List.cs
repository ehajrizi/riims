using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using DatabaseLogic;

namespace Application.HonorsandAwards
{
    public class List
    {
         public class Query : IRequest<List<HonorandAward>> { }

        public class Handler : IRequestHandler<Query, List<HonorandAward>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<HonorandAward>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.HonorsandAwards.ToListAsync();
            }
        }
    }
}