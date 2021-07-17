using Domain;
using FluentValidation;

namespace Application
{
    public class MbikeqyresiTemaveValidator : AbstractValidator<MbikeqyresiTemave>
    {
        public MbikeqyresiTemaveValidator()
        {
            RuleFor(x => x.TitulliTemes).NotEmpty();
            RuleFor(x => x.Studenti).NotEmpty();
            RuleFor(x => x.Muaji).NotEmpty();
            RuleFor(x => x.Viti).NotEmpty();
            RuleFor(x => x.Institucioni).NotEmpty();
            RuleFor(x => x.Fakulteti).NotEmpty();
            RuleFor(x => x.NiveliAkademik).NotEmpty();
        }
    }
}