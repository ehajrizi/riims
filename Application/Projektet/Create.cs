using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using DatabaseLogic;
using FluentValidation;
using Application.Interfaces;
using Microsoft.EntityFrameworkCore;
using Application.Core;

namespace Application.Projektet
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Projekti Projekti { get; set; }
        }
        public class CommandValidatior : AbstractValidator<Command>
        {
            public CommandValidatior()
            {
                RuleFor(x => x.Projekti).SetValidator(new ProjektiValidator());
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

                var projekti = new Projekti
                {
                    User = user,
                    UseriId = user.Id,
                    EmriProjektit = request.Projekti.EmriProjektit,
                    Pershkrimi = request.Projekti.Pershkrimi,
                    Lokacioni = request.Projekti.Lokacioni,
                    DataFillimit = request.Projekti.DataFillimit,
                    DataMbarimit = request.Projekti.DataMbarimit,
                    Buxheti = request.Projekti.Buxheti,
                    EmriKlientit = request.Projekti.EmriKlientit,
                    Institucioni = request.Projekti.Institucioni,
                };

                _context.Projektet.Add(projekti);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failed");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
