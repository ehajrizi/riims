using Domain;
using FluentValidation;

namespace Application
{
    public class HonorsandAwardsValidator : AbstractValidator<HonorandAward>
    {
        public HonorsandAwardsValidator()
        {
            RuleFor(x => x.Titulli).NotEmpty();
            RuleFor(x => x.Institucioni).NotEmpty();
            RuleFor(x => x.Muaji).NotEmpty();
            RuleFor(x => x.Viti).NotEmpty();
            RuleFor(x => x.Pozita).NotEmpty();
        }
    }
}