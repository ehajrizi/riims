using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using DatabaseLogic;

namespace Application.PjesemarresitPublikimet
{
    public class Details
    {
        public class Query : IRequest<PjesemarresiPublikimi>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, PjesemarresiPublikimi>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<PjesemarresiPublikimi> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.PjesemarresitPublikimet.FindAsync(request.Id);
            }
        }
    }
}