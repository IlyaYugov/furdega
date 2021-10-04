using AutoMapper;
using Furdega.DataAccess.Models;
using Furdega.Services.FileManagers;
using Furdega.Services.Materials.Dtos.Input;
using Furdega.Services.Materials.Dtos.Output;

namespace Furdega.Services.Materials.Mapping
{
    public class MaterialProfile: Profile
    {
        public MaterialProfile()
        {
            CreateMap<MaterialRequest, Material>()
                .ForMember(dest => dest.ImageId, s => s.MapFrom(source => source.Image.Id))
                .ForMember(dest => dest.ImageId, s => s.MapFrom(source => source.Image.Id));

            CreateMap<Material, MaterialResponse>()
                .ForMember(dest => dest.Image, s => s.MapFrom(source => new ImageResponse
                {
                    Id = source.ImageId,
                    ImageUrl = source.ImageUrl
                }))
                .ForMember(dest => dest.Image, s => s.MapFrom(source => new ImageResponse
                {
                    Id = source.ImageId,
                    ImageUrl = source.ImageUrl
                }));
        }
    }
}