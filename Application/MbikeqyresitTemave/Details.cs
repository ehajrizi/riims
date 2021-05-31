using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using DatabaseLogic;

namespace Application.MbikeqyresitTemave
{
        public class Details
    {
        public class Query : IRequest<MbikeqyresiTemave>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, MbikeqyresiTemave>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<MbikeqyresiTemave> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.MbikeqyresitTemave.FindAsync(request.Id);
            }
        }
    }
}