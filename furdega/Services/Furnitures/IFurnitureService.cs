using System.Collections.Generic;
using System.Threading.Tasks;
using Furdega.Services.Furnitures.Dtos.Input;
using Furdega.Services.Furnitures.Dtos.Output;

namespace Furdega.Services.Furnitures
{
    public interface IFurnitureService
    {
        Task<IEnumerable<FurnitureResponse>> GetFiltered(int? furnitureTypeId);
        Task<FurnitureResponse> Get(int id);
        Task<int> Create(FurnitureRequest furnitureRequest);
        Task Update(int id, FurnitureRequest furnitureRequest);
        Task Delete(int id);
    }
}