using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using DatabaseLogic;

namespace Application.Certifikimet
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Certifikimi Certifikimi { get; set; }
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
                var certifikimi = await _context.Certifikimet.FindAsync(request.Certifikimi.Id);

                _mapper.Map(request.Certifikimi, certifikimi);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}