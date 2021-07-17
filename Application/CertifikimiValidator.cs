using Domain;
using FluentValidation;

namespace Application
{
    public class CertifikimiValidator : AbstractValidator<Certifikimi>
    {
        public CertifikimiValidator()
        {
            RuleFor(x => x.Emri_Institucionit).NotEmpty();
            RuleFor(x => x.Titulli).NotEmpty();
            RuleFor(x => x.Lokacioni).NotEmpty();
            RuleFor(x => x.DataFillestare).NotEmpty();
            RuleFor(x => x.DataPerfundimtare).NotEmpty();
            RuleFor(x => x.Pershkrimi).NotEmpty();
        }
    }
}