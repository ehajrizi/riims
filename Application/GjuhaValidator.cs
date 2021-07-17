using Domain;
using FluentValidation;

namespace Application
{
    public class GjuhaValidator : AbstractValidator<Gjuha>
    {
        public GjuhaValidator()
        {
            RuleFor(x => x.ZgjedhGjuha).NotEmpty();
            RuleFor(x => x.Folur).NotEmpty();
            RuleFor(x => x.Shkruar).NotEmpty();
        }
    }
}