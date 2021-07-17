using Domain;
using FluentValidation;

namespace Application
{
    public class DonatoriValidator : AbstractValidator<Donatori>
    {
        public DonatoriValidator()
        {
            RuleFor(x => x.EmriIDonatorit).NotEmpty();
            RuleFor(x => x.PershkrimiDonatorit).NotEmpty();
            RuleFor(x => x.KontributiIDhene).NotEmpty();
        }
    }
}