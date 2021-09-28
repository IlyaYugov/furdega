using AutoMapper;
using Furdega.DataAccess.Models;
using Furdega.Dtos.MaterialTypes.Input;
using Furdega.Dtos.MaterialTypes.Output;

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