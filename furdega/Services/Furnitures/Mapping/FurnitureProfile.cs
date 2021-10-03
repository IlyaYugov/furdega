using AutoMapper;
using Furdega.DataAccess.Models;
using Furdega.Services.FileManagers;
using Furdega.Services.Furnitures.Dtos.Input;
using Furdega.Services.Furnitures.Dtos.Output;

namespace Furdega.Services.Furnitures.Mapping
{
    public class FurnitureProfile : Profile
    {
        public FurnitureProfile()
        {
            CreateMap<FurnitureRequest, Furniture>()
                .ForMember(dest => dest.BeforeImageId, s => s.MapFrom(source => source.BeforeImage.Id))
                .ForMember(dest => dest.AfterImageId, s => s.MapFrom(source => source.AfterImage.Id));

            CreateMap<Furniture, FurnitureResponse>()
                .ForMember(dest => dest.AfterImage, s => s.MapFrom(source => new ImageResponse
                {
                    Id = source.AfterImageId,
                    ImageUrl = source.AfterImageUrl
                }))
                .ForMember(dest => dest.BeforeImage, s => s.MapFrom(source => new ImageResponse
                {
                    Id = source.BeforeImageId,
                    ImageUrl = source.BeforeImageUrl
                }));
        }
    }
}