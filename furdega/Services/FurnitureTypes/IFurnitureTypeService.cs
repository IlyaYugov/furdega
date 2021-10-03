using System.Collections.Generic;
using System.Threading.Tasks;
using Furdega.Services.FurnitureTypes.Dtos.Input;
using Furdega.Services.FurnitureTypes.Dtos.Output;

namespace Furdega.Services.FurnitureTypes
{
    public interface IFurnitureTypeService
    {
        public Task<IEnumerable<FurnitureTypeResponse>> GetTypes();

        public Task<int> Create(UpdateFurnitureTypeRequest type);

        public Task Update(int id, UpdateFurnitureTypeRequest type);

        public Task Delete(int id);
    }
}