using AutoMapper;
using Furdega.DataAccess.Models;
using Furdega.Services.MaterialTypes.Dtos.Input;
using Furdega.Services.MaterialTypes.Dtos.Output;

namespace Furdega.Services.MaterialTypes.Mapping
{
    public class MaterialTypeProfile: Profile
    {
        public MaterialTypeProfile()
        {
            CreateMap<UpdateMaterialTypeRequest, MaterialType>();
            CreateMap<MaterialType, MaterialTypeResponse>();
        }
    }
}