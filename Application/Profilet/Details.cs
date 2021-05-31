using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using DatabaseLogic;

namespace Application.Profilet
{
    public class Details
    {
        public class Query : IRequest<Profili>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Profili>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Profili> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Profilet.FindAsync(request.Id);
            }
        }
    }
}