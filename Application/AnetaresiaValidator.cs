using Domain;
using FluentValidation;

namespace Application
{
    public class AnetaresiaValidator : AbstractValidator<Anetaresia>
    {
        public AnetaresiaValidator()
        {
            RuleFor(x => x.EmriInstOrg).NotEmpty();
            RuleFor(x => x.Pozita).NotEmpty();
            RuleFor(x => x.Pershkrimi).NotEmpty();
        }
    }
}