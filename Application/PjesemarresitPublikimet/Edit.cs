using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using DatabaseLogic;

namespace Application.PjesemarresitPublikimet
{
    public class Edit
    {
        public class Command : IRequest
        {
            public PjesemarresiPublikimi PjesemarresiPublikimi { get; set; }
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
                var pjesemarresiPublikimi = await _context.PjesemarresitPublikimet.FindAsync(request.PjesemarresiPublikimi.Id);

                _mapper.Map(request.PjesemarresiPublikimi, pjesemarresiPublikimi);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}