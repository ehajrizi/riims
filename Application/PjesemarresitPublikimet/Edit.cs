using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using DatabaseLogic;
using FluentValidation;
using Application.Core;

namespace Application.PjesemarresitPublikimet
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public PjesemarresiPublikimi PjesemarresiPublikimi { get; set; }
        }

        public class CommandValidatior : AbstractValidator<Command>
        {
            public CommandValidatior()
            {
                RuleFor(x => x.PjesemarresiPublikimi).SetValidator(new PjesemarresiPublikimiValidator());
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
                var pjesemarresiPublikimi = await _context.PjesemarresitPublikimet.FindAsync(request.PjesemarresiPublikimi.Id);

                if(pjesemarresiPublikimi == null) return null;

                _mapper.Map(request.PjesemarresiPublikimi, pjesemarresiPublikimi);

                var result = await _context.SaveChangesAsync() > 0;

                if(!result) return Result<Unit>.Failure("Failed to update activity");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
