using Domain;
using FluentValidation;

namespace Application
{
    public class PjesemarresiValidator : AbstractValidator<Pjesemarresi>
    {
        public PjesemarresiValidator()
        {            
            RuleFor(x => x.EmriIPjesemarresit).NotEmpty();
            RuleFor(x => x.roli).NotEmpty();
        }
    }
}