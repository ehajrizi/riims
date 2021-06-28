using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using DatabaseLogic;

namespace Application.Certifikimet
{
    public class List
    {
        public class Query : IRequest<List<Certifikimi>> { }

        public class Handler : IRequestHandler<Query, List<Certifikimi>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Certifikimi>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Certifikimet.ToListAsync();
            }
        }
    }
}