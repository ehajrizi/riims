using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using DatabaseLogic;

namespace Application.Specializimet
{
    public class List
    {
        public class Query : IRequest<List<Specializimi>> { }

        public class Handler : IRequestHandler<Query, List<Specializimi>>
        {
            private readonly DataContext _context;
            
            public Handler(DataContext context)
            {
                
                _context = context;
            }

            public async Task<List<Specializimi>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Specializimet.ToListAsync(cancellationToken);
            }
        }
    }
}