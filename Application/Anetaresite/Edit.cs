using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using DatabaseLogic;
using FluentValidation;
using Application.Core;

namespace Application.Anetaresite
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Anetaresia Anetaresia { get; set; }
        }

        public class CommandValidatior : AbstractValidator<Command>
        {
            public CommandValidatior()
            {
                RuleFor(x => x.Anetaresia).SetValidator(new AnetaresiaValidator());
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
                var anetaresia = await _context.Anetaresite.FindAsync(request.Anetaresia.Id);

                if(anetaresia == null) return null;

                _mapper.Map(request.Anetaresia, anetaresia);

                var result = await _context.SaveChangesAsync() > 0;

                if(!result) return Result<Unit>.Failure("Failed");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}