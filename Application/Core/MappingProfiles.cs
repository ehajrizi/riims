using Application.Anetaresite;
using Application.Certifikimet;
using Application.Donatoret;
using Application.Edukimet;
using Application.Eksperiencat;
using Application.Gjuhet;
using Application.HonorsandAwards;
using Application.Isbnt;
using Application.MbikeqyresitTemave;
using Application.Pjesemarresit;
using Application.PjesemarresitPublikimet;
using Application.ProfileUser;
using Application.Projektet;
using Application.Publikimet;
using Application.Specializimet;
using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Eksperienca, Eksperienca>();
            CreateMap<Publikimi, Publikimi>();
            CreateMap<MbikeqyresiTemave, MbikeqyresiTemave>();
            CreateMap<Specializimi, Specializimi>();
            CreateMap<Edukimi, Edukimi>();
            CreateMap<Certifikimi, Certifikimi>();
            CreateMap<Projekti, Projekti>();
            CreateMap<Gjuha, Gjuha>();
            CreateMap<Anetaresia, Anetaresia>();
            CreateMap<HonorandAward, HonorandAward>();
            CreateMap<Donatori, Donatori>();
            CreateMap<Pjesemarresi, Pjesemarresi>();
            CreateMap<PjesemarresiPublikimi, PjesemarresiPublikimi>();
            CreateMap<Publikimi, PublikimiDto>();
            CreateMap<Eksperienca, EksperiencaDto>();
            CreateMap<MbikeqyresiTemave, MbikeqyresiTemaveDto>();
            CreateMap<Specializimi, SpecializimiDto>();
            CreateMap<Edukimi, EdukimiDto>();
            CreateMap<Certifikimi, CertifikimiDto>();
            CreateMap<Projekti, ProjektiDto>();
            CreateMap<Gjuha, GjuhaDto>();
            CreateMap<Anetaresia, AnetaresiaDto>();
            CreateMap<HonorandAward, HonorsandAwardsDto>();
            CreateMap<Donatori, DonatoriDto>();
            CreateMap<Pjesemarresi, PjesemarresitDto>();
            CreateMap<PjesemarresiPublikimi, PjesemarresiPublikimi>();
            CreateMap<PjesemarresiPublikimi, PjesemarresiPublikimiDto>();
            CreateMap<Isbn, Isbn>();
            CreateMap<Isbn, IsbnDto>();
            CreateMap<UserProfile, UserProfile>();
            CreateMap<AppUser, UserProfile>();
        }
    }
}