using Domain;
using FluentValidation;

namespace Application
{
    public class IsbnValidator : AbstractValidator<Isbn>
    {
        public IsbnValidator()
        {
            RuleFor(x => x.LlojiNumrit).NotEmpty();
            RuleFor(x => x.Numri).NotEmpty();
        }
    }
}