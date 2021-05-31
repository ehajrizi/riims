using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using DatabaseLogic;

namespace Application.Edukimet
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Edukimi Edukimi { get; set; }
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
                var edukimi = await _context.Edukimet.FindAsync(request.Edukimi.Id);

                _mapper.Map(request.Edukimi, edukimi);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}