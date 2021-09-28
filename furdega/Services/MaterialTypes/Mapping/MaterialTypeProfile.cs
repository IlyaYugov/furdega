using AutoMapper;
using Furdega.DataAccess.Models;
using Furdega.Models.MaterialTypes.Input;
using Furdega.Models.MaterialTypes.Output;

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