using System.Collections.Generic;
using System.Threading.Tasks;
using Furdega.Models.Furnitures.Input;
using Furdega.Models.Furnitures.Output;

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