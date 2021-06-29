using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using DatabaseLogic;

namespace Application.Projektet
{
    public class List
    {
        public class Query : IRequest<List<Projekti>> { }

        public class Handler : IRequestHandler<Query, List<Projekti>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Projekti>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Projektet.ToListAsync(cancellationToken);
            }
        }
    }
}