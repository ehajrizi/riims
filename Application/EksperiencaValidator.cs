using Domain;
using FluentValidation;

namespace Application
{
    public class EksperiencaValidator : AbstractValidator<Eksperienca>
    {
        public EksperiencaValidator()
        {
            RuleFor(x => x.EmriInstitucionit).NotEmpty();
            RuleFor(x => x.Titulli).NotEmpty();
            RuleFor(x => x.PunePrimare).NotEmpty();
            RuleFor(x => x.Lokacioni).NotEmpty();
            RuleFor(x => x.DataFillestare).NotEmpty();
            RuleFor(x => x.DataPerfundimtare).NotEmpty();
            RuleFor(x => x.Pershkrimi).NotEmpty();
            RuleFor(x => x.PersoniKontaktues).NotEmpty();
            RuleFor(x => x.Email).NotEmpty();
            RuleFor(x => x.NumriTelefonit).NotEmpty();
        }
    }
}