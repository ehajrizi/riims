using Application.ProfileUser;
using FluentValidation;

namespace Application
{
    public class UserProfileValidator : AbstractValidator<UserProfile>
    {
        public UserProfileValidator()
        {
            RuleFor(x => x.Emri).NotEmpty();
            RuleFor(x => x.Mbiemri).NotEmpty();
            RuleFor(x => x.TitulliShkencor).NotEmpty();
            RuleFor(x => x.Datelindja).NotEmpty();
            RuleFor(x => x.Vendlindja).NotEmpty();
            RuleFor(x => x.ShtetiLindjes).NotEmpty();
            RuleFor(x => x.Gjinia).NotEmpty();
            RuleFor(x => x.PhoneNumber).NotEmpty();
        }
    }
}