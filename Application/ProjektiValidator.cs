using Domain;
using FluentValidation;

namespace Application
{
    public class ProjektiValidator : AbstractValidator<Projekti>
    {
        public ProjektiValidator()
        {
            RuleFor(x => x.EmriProjektit).NotEmpty();
            RuleFor(x => x.Pershkrimi).NotEmpty();
            RuleFor(x => x.Lokacioni).NotEmpty();
            RuleFor(x => x.DataFillimit).NotEmpty();
            RuleFor(x => x.DataMbarimit).NotEmpty();
            RuleFor(x => x.Buxheti).NotEmpty();
            RuleFor(x => x.EmriKlientit).NotEmpty();
            RuleFor(x => x.Institucioni).NotEmpty();
        }
    }
}