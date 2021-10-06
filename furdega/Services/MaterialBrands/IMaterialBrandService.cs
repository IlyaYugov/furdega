using System.Collections.Generic;
using System.Threading.Tasks;
using Furdega.Services.MaterialBrands.Dtos.Input;
using Furdega.Services.MaterialBrands.Dtos.Output;

namespace Furdega.Services.MaterialBrands
{
    public interface IMaterialBrandService
    {
        public Task<MaterialBrandResponse> Get(int id);

        public Task<IEnumerable<MaterialBrandResponse>> GetBrands(int materialId);

        public Task<int> Create(MaterialBrandRequest brandRequest);

        public Task Update(int id, MaterialBrandRequest brandRequest);

        public Task Delete(int id);
    }
}
