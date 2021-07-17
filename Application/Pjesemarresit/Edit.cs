using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using DatabaseLogic;
using FluentValidation;
using Application.Core;

namespace Application.Pjesemarresit
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Pjesemarresi Pjesemarresi { get; set; }
        }

        public class CommandValidatior : AbstractValidator<Command>
        {
            public CommandValidatior()
            {
                RuleFor(x => x.Pjesemarresi).SetValidator(new PjesemarresiValidator());
            }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var pjesemarresi = await _context.Pjesemarresit.FindAsync(request.Pjesemarresi.Id);

                if(pjesemarresi == null) return null;

                _mapper.Map(request.Pjesemarresi, pjesemarresi);

                var result = await _context.SaveChangesAsync() > 0;

                if(!result) return Result<Unit>.Failure("Failed to update activity");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
