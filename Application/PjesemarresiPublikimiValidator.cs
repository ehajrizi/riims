using Domain;
using FluentValidation;

namespace Application
{
    public class PjesemarresiPublikimiValidator : AbstractValidator<PjesemarresiPublikimi>
    {
        public PjesemarresiPublikimiValidator()
        {            
            RuleFor(x => x.EmriIPjesemarresit).NotEmpty();
            RuleFor(x => x.roli).NotEmpty();
        }
    }
}