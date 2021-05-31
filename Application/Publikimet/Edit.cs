using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using DatabaseLogic;

namespace Application.Publikimet
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Publikimi Publikimi { get; set; }
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
                var activity = await _context.Publikimet.FindAsync(request.Publikimi.Id);

                _mapper.Map(request.Publikimi, activity);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}