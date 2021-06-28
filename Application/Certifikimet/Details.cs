using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using DatabaseLogic;

namespace Application.Certifikimet
{
    public class Details
    {
        public class Query : IRequest<Certifikimi>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Certifikimi>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Certifikimi> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Certifikimet.FindAsync(request.Id);
            }
        }
    }
}