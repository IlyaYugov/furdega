using System.Collections.Generic;
using System.Threading.Tasks;
using Furdega.Models.MaterialTypes.Input;
using Furdega.Models.MaterialTypes.Output;

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
