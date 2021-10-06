using AutoMapper;
using Furdega.DataAccess.Models;
using Furdega.Services.FileManagers;
using Furdega.Services.MaterialBrands.Dtos.Input;
using Furdega.Services.MaterialBrands.Dtos.Output;

namespace Furdega.Services.MaterialBrands.Mapping
{
    public class MaterialBrandProfile: Profile
    {
        public MaterialBrandProfile()
        {
            CreateMap<MaterialBrandRequest, MaterialBrand>()
                .ForMember(dest => dest.MainImageId, s => s.MapFrom(source => source.MainImage.Id))
                .ForMember(dest => dest.PreviewImageId, s => s.MapFrom(source => source.PreviewImage.Id)); 

            CreateMap<MaterialBrand, MaterialBrandResponse>()
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

            CreateMap<MaterialBrand, GetMaterialBrandsResponse>()
                .ForMember(dest => dest.PreviewImage, s => s.MapFrom(source => new ImageResponse
                {
                    Id = source.PreviewImageId,
                    ImageUrl = source.PreviewImageUrl
                }));
        }
    }
}