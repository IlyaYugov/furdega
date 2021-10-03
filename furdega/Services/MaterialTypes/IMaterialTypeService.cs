using System.Collections.Generic;
using System.Threading.Tasks;
using Furdega.Services.MaterialTypes.Dtos.Input;
using Furdega.Services.MaterialTypes.Dtos.Output;

namespace Furdega.Services.MaterialTypes
{
    public interface IMaterialTypeService
    {
        public Task<IEnumerable<MaterialTypeResponse>> GetTypes();

        public Task<int> Create(UpdateMaterialTypeRequest type);

        public Task Update(int id, UpdateMaterialTypeRequest type);

        public Task Delete(int id);
    }
}
