using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using DatabaseLogic;
using FluentValidation;
using Application.Interfaces;
using Microsoft.EntityFrameworkCore;
using Application.Core;

namespace Application.MbikeqyresitTemave
{
    public class Create
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
            private readonly IUserAccessor _userAccessor;
            public Handler(DataContext context, IUserAccessor userAccessor)
            {
                _userAccessor = userAccessor;
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var user = await _context.Users.FirstOrDefaultAsync(x => x.Id == _userAccessor.GetId());

                var mbikeqyresiTemave = new MbikeqyresiTemave
                {
                    User = user,
                    UseriId = user.Id,
                    TitulliTemes = request.MbikeqyresiTemave.TitulliTemes,
                    Studenti = request.MbikeqyresiTemave.Studenti,
                    Muaji = request.MbikeqyresiTemave.Muaji,
                    Viti = request.MbikeqyresiTemave.Viti,
                    Institucioni = request.MbikeqyresiTemave.Institucioni,
                    Fakulteti = request.MbikeqyresiTemave.Fakulteti,
                    NiveliAkademik = request.MbikeqyresiTemave.NiveliAkademik,
                };

                _context.MbikeqyresitTemave.Add(mbikeqyresiTemave);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failed");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
