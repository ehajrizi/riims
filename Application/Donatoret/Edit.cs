using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using DatabaseLogic;

namespace Application.Donatoret
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Donatori Donatori { get; set; }
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
                var donatori = await _context.Donatoret.FindAsync(request.Donatori.Id);

                _mapper.Map(request.Donatori, donatori);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}