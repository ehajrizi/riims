using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using DatabaseLogic;

namespace Application.Specializimet
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Specializimi Specializimi { get; set; }
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
                var specializimi = await _context.Specializimet.FindAsync(request.Specializimi.Id);

                _mapper.Map(request.Specializimi, specializimi);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}