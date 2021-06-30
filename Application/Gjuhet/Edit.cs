using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using DatabaseLogic;

namespace Application.Gjuhet
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Gjuha Gjuha { get; set; }
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
                var gjuha = await _context.Gjuhet.FindAsync(request.Gjuha.Id);

                _mapper.Map(request.Gjuha, gjuha);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}