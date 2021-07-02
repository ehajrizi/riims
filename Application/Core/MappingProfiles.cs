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
            // CreateMap<Specializimi, Specializimi>();
            CreateMap<Edukimi, Edukimi>();
            CreateMap<Profili, Profili>();
            CreateMap<Certifikimi, Certifikimi>();
            CreateMap<Projekti, Projekti>();
            CreateMap<Gjuha, Gjuha>();
            CreateMap<Anetaresia, Anetaresia>();
            CreateMap<HonorandAward, HonorandAward>();
            CreateMap<Donatori, Donatori>();
        }
    }
}