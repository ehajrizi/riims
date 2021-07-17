using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using DatabaseLogic;
using FluentValidation;
using Application.Core;

namespace Application.MbikeqyresitTemave
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public MbikeqyresiTemave MbikeqyresiTemave { get; set; }
        }

        public class CommandValidatior : AbstractValidator<Command>
        {
            public CommandValidatior()
            {
                RuleFor(x => x.MbikeqyresiTemave).SetValidator(new MbikeqyresiTemaveValidator());
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
                var mbikeqyresiTemave = await _context.MbikeqyresitTemave.FindAsync(request.MbikeqyresiTemave.Id);

                if(mbikeqyresiTemave == null) return null;

                _mapper.Map(request.MbikeqyresiTemave, mbikeqyresiTemave);

                var result = await _context.SaveChangesAsync() > 0;

                if(!result) return Result<Unit>.Failure("Failed to update activity");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
