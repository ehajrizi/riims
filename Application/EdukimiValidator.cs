using Domain;
using FluentValidation;

namespace Application
{
    public class EdukimiValidator : AbstractValidator<Edukimi>
    {
        public EdukimiValidator()
        {
            RuleFor(x => x.Emri_i_Institucionit).NotEmpty();
            RuleFor(x => x.Titulli).NotEmpty();
            RuleFor(x => x.Fusha_e_Studimit).NotEmpty();
            RuleFor(x => x.Lokacioni).NotEmpty();
            RuleFor(x => x.DataFillestare).NotEmpty();
            RuleFor(x => x.DataPerfundimtare).NotEmpty();
            RuleFor(x => x.Pershkrimi).NotEmpty();
        }
    }
}