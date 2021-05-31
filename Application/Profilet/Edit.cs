using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using DatabaseLogic;

namespace Application.Profilet
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Profili Profili { get; set; }
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
                var profili = await _context.Profilet.FindAsync(request.Profili.Id);

                _mapper.Map(request.Profili, profili);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}