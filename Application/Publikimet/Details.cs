using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using DatabaseLogic;

namespace Application.Publikimet
{
    public class Details
    {
        public class Query : IRequest<Publikimi>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Publikimi>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Publikimi> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Publikimet.FindAsync(request.Id);
            }
        }
    }
}