using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using DatabaseLogic;

namespace Application.Donatoret
{
    public class List
    {
        public class Query : IRequest<List<Donatori>> { }

        public class Handler : IRequestHandler<Query, List<Donatori>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Donatori>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Donatoret.ToListAsync(cancellationToken);
            }
        }
    }
}