using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using DatabaseLogic;
using FluentValidation;
using Application.Core;

namespace Application.Eksperiencat
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Eksperienca Eksperienca { get; set; }
        }

        public class CommandValidatior : AbstractValidator<Command>
        {
            public CommandValidatior()
            {
                RuleFor(x => x.Eksperienca).SetValidator(new EksperiencaValidator());
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
                var eksperienca = await _context.Eksperiencat.FindAsync(request.Eksperienca.Id);

                if(eksperienca == null) return null;

                _mapper.Map(request.Eksperienca, eksperienca);

                var result = await _context.SaveChangesAsync() > 0;

                if(!result) return Result<Unit>.Failure("Failed to update activity");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
