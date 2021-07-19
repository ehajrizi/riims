using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using DatabaseLogic;
using FluentValidation;
using Application.Core;

namespace Application.HonorsandAwards
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public HonorandAward HonorandAward { get; set; }
        }

        public class CommandValidatior : AbstractValidator<Command>
        {
            public CommandValidatior()
            {
                RuleFor(x => x.HonorandAward).SetValidator(new HonorsandAwardsValidator());
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
                var honorandAward = await _context.HonorsandAwards.FindAsync(request.HonorandAward.Id);

                if(honorandAward == null) return null;

                _mapper.Map(request.HonorandAward, honorandAward);

                var result = await _context.SaveChangesAsync() > 0;

                if(!result) return Result<Unit>.Failure("Failed");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
