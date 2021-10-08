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
                .ForMember(dest => dest.MainImageId, s => s.MapFrom(source => source.MainImage.Id))
                .ForMember(dest => dest.PreviewImageId, s => s.MapFrom(source => source.PreviewImage.Id));

            CreateMap<Material, MaterialResponse>()
                .ForMember(dest => dest.MainImage, s => s.MapFrom(source => new ImageResponse
                {
                    Id = source.MainImageId,
                    ImageUrl = source.MainImageUrl
                }))
                .ForMember(dest => dest.PreviewImage, s => s.MapFrom(source => new ImageResponse
                {
                    Id = source.PreviewImageId,
                    ImageUrl = source.PreviewImageUrl
                }));

            CreateMap<Material, GetMaterialsResponse>()
                .ForMember(dest => dest.PreviewImage, s => s.MapFrom(source => new ImageResponse
                {
                    Id = source.PreviewImageId,
                    ImageUrl = source.PreviewImageUrl
                }));
        }
    }
}