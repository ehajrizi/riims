using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using DatabaseLogic;

namespace Application.PjesemarresitPublikimet
 {
    public class List
    {
        public class Query : IRequest<List<PjesemarresiPublikimi>> { }

        public class Handler : IRequestHandler<Query, List<PjesemarresiPublikimi>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<PjesemarresiPublikimi>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.PjesemarresitPublikimet.ToListAsync(cancellationToken);
            }
        }
    }
}