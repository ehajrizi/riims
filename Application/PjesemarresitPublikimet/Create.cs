using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using DatabaseLogic;
using FluentValidation;
using Application.Interfaces;
using Microsoft.EntityFrameworkCore;
using Application.Core;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using System;

namespace Application.PjesemarresitPublikimet
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public PjesemarresiPublikimi PjesemarresiPublikimi { get; set; }
            // public Publikimi Publikimi { get; set; }
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
            private readonly IUserAccessor _userAccessor;
            public Handler(DataContext context, IUserAccessor userAccessor)
            {
                _userAccessor = userAccessor;
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {

                var pjesemarresiPublikimi = new PjesemarresiPublikimi
                {
                    EmriIPjesemarresit = request.PjesemarresiPublikimi.EmriIPjesemarresit,
                    roli = request.PjesemarresiPublikimi.roli,
                    PublikimId = request.PjesemarresiPublikimi.PublikimId
                };

                _context.PjesemarresitPublikimet.Add(pjesemarresiPublikimi);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failed");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}
