using AutoMapper;
using Furdega.DataAccess.Models;
using Furdega.Services.FurnitureTypes.Dtos.Input;
using Furdega.Services.FurnitureTypes.Dtos.Output;

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