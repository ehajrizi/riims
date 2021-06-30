using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using DatabaseLogic;

namespace Application.HonorsandAwards
{
    public class Edit
    {
        public class Command : IRequest
        {
            public HonorandAward HonorandAward { get; set; }
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
                var honorandaward = await _context.HonorsandAwards.FindAsync(request.HonorandAward.Id);

                _mapper.Map(request.HonorandAward, honorandaward);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}