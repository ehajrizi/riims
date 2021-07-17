using Domain;
using FluentValidation;

namespace Application
{
    public class PublikimiValidator : AbstractValidator<Publikimi>
    {
        public PublikimiValidator()
        {
            RuleFor(x => x.Titulli).NotEmpty();
            RuleFor(x => x.EmertimiEvent).NotEmpty();
            RuleFor(x => x.Data).NotEmpty();
            RuleFor(x => x.Viti).NotEmpty();
            RuleFor(x => x.Vendi).NotEmpty();
            RuleFor(x => x.Statusi).NotEmpty();
            RuleFor(x => x.LlojiPublikimit).NotEmpty();
            RuleFor(x => x.Institucioni).NotEmpty();
            RuleFor(x => x.Departamenti).NotEmpty();
            RuleFor(x => x.Lenda).NotEmpty();
            RuleFor(x => x.Kategoria).NotEmpty();
            RuleFor(x => x.LinkuPublikimit).NotEmpty();
            RuleFor(x => x.VolumiFaqeve).NotEmpty();
            RuleFor(x => x.Referenca).NotEmpty();
            RuleFor(x => x.AutorKryesor).NotEmpty();
        }
    }
}