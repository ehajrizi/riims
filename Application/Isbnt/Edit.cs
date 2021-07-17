using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using DatabaseLogic;

namespace Application.Isbnt
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Isbn Isbn { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var Isbn = await _context.Isbnt.FindAsync(request.Isbn.Id);

                _mapper.Map(request.Isbn, Isbn);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}