using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Application.Interfaces;
using Application.ProfileUser;
using AutoMapper;
using DatabaseLogic;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.Profiles
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
        {
            public string Emri { get; set; }
            public string Mbiemri { get; set; }
            public string EmriMesem { get; set; }
            public char Gjinia { get; set; }
            public string TitulliShkencor { get; set; }
            public string Roli { get; set; }
            public DateTime Datelindja { get; set; }
            public string Vendlindja { get; set; }
            public string ShtetiLindjes { get; set; }
            public string RrugaCurrent { get; set; }
            public string QytetiCurrent { get; set; }
            public int ZipKodiCurrent { get; set; }
            public string ShtetiCurrent { get; set; }
            public string Pershkrimi { get; set; }
            public string LinkedIn { get; set; }
            public string PhoneNumber { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Emri).NotEmpty();
                RuleFor(x => x.Mbiemri).NotEmpty();
                RuleFor(x => x.TitulliShkencor).NotEmpty();
                RuleFor(x => x.Datelindja).NotEmpty();
                RuleFor(x => x.Vendlindja).NotEmpty();
                RuleFor(x => x.ShtetiLindjes).NotEmpty();
                RuleFor(x => x.Gjinia).NotEmpty();
                RuleFor(x => x.PhoneNumber).NotEmpty();
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
                var user = await _context.Users.FirstOrDefaultAsync(x =>
                    x.Email == _userAccessor.GetEmail());

                user.Emri = request.Emri ?? user.Emri;
                user.Mbiemri = request.Mbiemri ?? user.Mbiemri;
                user.EmriMesem = request.EmriMesem ?? user.EmriMesem;
                user.Gjinia = request.Gjinia;
                user.TitulliShkencor = request.TitulliShkencor ?? user.TitulliShkencor;
                user.Datelindja = request.Datelindja;
                user.Vendlindja = request.Vendlindja ?? user.Vendlindja;
                user.ShtetiLindjes = request.ShtetiLindjes ?? user.ShtetiLindjes;
                user.RrugaCurrent = request.RrugaCurrent ?? user.RrugaCurrent;
                user.QytetiCurrent = request.QytetiCurrent ?? user.QytetiCurrent;
                user.ZipKodiCurrent = request.ZipKodiCurrent;
                user.ShtetiCurrent = request.ShtetiCurrent ?? user.ShtetiCurrent;
                user.Pershkrimi = request.Pershkrimi ?? user.Pershkrimi;
                user.LinkedIn = request.LinkedIn ?? user.LinkedIn;
                user.PhoneNumber = request.PhoneNumber ?? user.PhoneNumber;

                _context.Entry(user).State = EntityState.Modified;

                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Result<Unit>.Success(Unit.Value);

                return Result<Unit>.Failure("Problem updating profile");
            }
        }
    }
}