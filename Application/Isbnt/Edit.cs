using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using DatabaseLogic;
using FluentValidation;
using Application.Core;

namespace Application.Isbnt
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Isbn Isbn { get; set; }
        }

        public class CommandValidatior : AbstractValidator<Command>
        {
            public CommandValidatior()
            {
                RuleFor(x => x.Isbn).SetValidator(new IsbnValidator());
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
                var isbn = await _context.Isbnt.FindAsync(request.Isbn.Id);

                if(isbn == null) return null;

                _mapper.Map(request.Isbn, isbn);

                var result = await _context.SaveChangesAsync() > 0;

                if(!result) return Result<Unit>.Failure("Failed");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
