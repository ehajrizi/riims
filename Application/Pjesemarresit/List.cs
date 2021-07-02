using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using DatabaseLogic;

namespace Application.Pjesemarresit
{
    public class List
    {
        public class Query : IRequest<List<Pjesemarresi>> { }

        public class Handler : IRequestHandler<Query, List<Pjesemarresi>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Pjesemarresi>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Pjesemarresit.ToListAsync(cancellationToken);
            }
        }
    }
}