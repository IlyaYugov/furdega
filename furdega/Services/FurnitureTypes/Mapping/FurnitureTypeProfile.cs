using AutoMapper;
using Furdega.DataAccess.Models;
using Furdega.Dtos.Furnitures.Input;
using Furdega.Dtos.Furnitures.Output;

namespace Furdega.Services.FurnitureTypes.Mapping
{
    public class FurnitureTypeProfile: Profile
    {
        public FurnitureTypeProfile()
        {
            CreateMap<UpdateFurnitureTypeRequest, FurnitureType>();
            CreateMap<FurnitureType, FurnitureTypeResponse>();
        }
    }
}