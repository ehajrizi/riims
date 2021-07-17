using Domain;
using FluentValidation;

namespace Application
{
    public class SpecializimiValidator : AbstractValidator<Specializimi>
    {
        public SpecializimiValidator()
        {
            RuleFor(x => x.EmriInstitucionit).NotEmpty();
            RuleFor(x => x.Titulli).NotEmpty();
            RuleFor(x => x.Lokacioni).NotEmpty();
            RuleFor(x => x.DataFillestare).NotEmpty();
            RuleFor(x => x.DataPerfundimtare).NotEmpty();
            RuleFor(x => x.Pershkrimi).NotEmpty();
        }
    }
}