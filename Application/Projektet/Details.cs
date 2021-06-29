using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using DatabaseLogic;

namespace Application.Projektet
{
    public class Details
    {
        public class Query : IRequest<Projekti>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Projekti>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Projekti> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Projektet.FindAsync(request.Id);
            }
        }
    }
}