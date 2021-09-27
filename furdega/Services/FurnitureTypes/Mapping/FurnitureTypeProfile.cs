using AutoMapper;
using Furdega.DataAccess.Models;
using Furdega.Models.Furnitures.Input;
using Furdega.Models.Furnitures.Output;

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