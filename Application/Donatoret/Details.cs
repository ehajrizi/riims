using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using DatabaseLogic;

namespace Application.Donatoret
{
    public class Details
    {
        public class Query : IRequest<Donatori>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Donatori>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Donatori> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Donatoret.FindAsync(request.Id);
            }
        }
    }
}