using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using DatabaseLogic;
using FluentValidation;
using Application.Interfaces;
using Microsoft.EntityFrameworkCore;
using Application.Core;

namespace Application.Publikimet
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Publikimi Publikimi { get; set; }
        }
        public class CommandValidatior : AbstractValidator<Command>
        {
            public CommandValidatior()
            {
                RuleFor(x => x.Publikimi).SetValidator(new PublikimiValidator());
            }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IUserAccessor _userAccessor;
            public Handler(DataContext context, IUserAccessor userAccessor)
            {
                _userAccessor = userAccessor;
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var user = await _context.Users.FirstOrDefaultAsync(x => x.Id == _userAccessor.GetId());

                var publikim = new Publikimi
                {
                    User = user,
                    UseriId = user.Id,
                    Titulli = request.Publikimi.Titulli,
                    EmertimiEvent = request.Publikimi.EmertimiEvent,
                    Data = request.Publikimi.Data,
                    Viti = request.Publikimi.Viti,
                    Vendi = request.Publikimi.Vendi,
                    Statusi = request.Publikimi.Statusi,
                    LlojiPublikimit = request.Publikimi.LlojiPublikimit,
                    Institucioni = request.Publikimi.Institucioni,
                    Departamenti = request.Publikimi.Departamenti,
                    Lenda = request.Publikimi.Lenda,
                    Kategoria = request.Publikimi.Kategoria,
                    LinkuPublikimit = request.Publikimi.LinkuPublikimit,
                    VolumiFaqeve = request.Publikimi.VolumiFaqeve,
                    Referenca = request.Publikimi.Referenca,
                    AutorKryesor = request.Publikimi.AutorKryesor,
                };

                _context.Publikimet.Add(publikim);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failed");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
