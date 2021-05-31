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
        }
    }
}