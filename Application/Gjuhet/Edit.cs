using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using DatabaseLogic;
using FluentValidation;
using Application.Core;

namespace Application.Gjuhet
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Gjuha Gjuha { get; set; }
        }

        public class CommandValidatior : AbstractValidator<Command>
        {
            public CommandValidatior()
            {
                RuleFor(x => x.Gjuha).SetValidator(new GjuhaValidator());
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
                var gjuha = await _context.Publikimet.FindAsync(request.Gjuha.Id);

                if(gjuha == null) return null;

                _mapper.Map(request.Gjuha, gjuha);

                var result = await _context.SaveChangesAsync() > 0;

                if(!result) return Result<Unit>.Failure("Failed to update activity");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
