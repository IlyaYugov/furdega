using System.Collections.Generic;
using System.Threading.Tasks;
using Furdega.Services.Materials.Dtos.Input;
using Furdega.Services.Materials.Dtos.Output;

namespace Furdega.Services.Materials
{
    public interface IMaterialService
    {
        Task<IEnumerable<MaterialResponse>> GetFiltered(int? materialTypeId);
        Task<MaterialResponse> Get(int id);
        Task<int> Create(MaterialRequest materialRequest);
        Task Update(int id, MaterialRequest materialRequest);
        Task Delete(int id);
    }
}