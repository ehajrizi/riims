using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using DatabaseLogic;

namespace Application.Anetaresite
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Anetaresia Anetaresia { get; set; }
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
                var anetaresia = await _context.Anetaresite.FindAsync(request.Anetaresia.Id);

                _mapper.Map(request.Anetaresia, anetaresia);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}