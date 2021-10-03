using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Furdega.Services.MaterialTypes;
using Furdega.Services.MaterialTypes.Dtos.Input;
using Furdega.Services.MaterialTypes.Dtos.Output;

namespace Furdega.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MaterialTypeController : ControllerBase
    {
        private readonly IMaterialTypeService _materialTypeService;

        public MaterialTypeController(IMaterialTypeService materialTypeService)
        {
            _materialTypeService = materialTypeService;
        }

        [HttpGet]
        public async Task<IEnumerable<MaterialTypeResponse>> GetTypes()
        {
            return await _materialTypeService.GetTypes();
        }

        [HttpPost]
        public async Task<int> Create([FromBody] UpdateMaterialTypeRequest type)
        {
            return await _materialTypeService.Create(type);
        }

        [HttpPut("{id:int}")]
        public async Task Update(int id, [FromBody] UpdateMaterialTypeRequest type)
        {
            await _materialTypeService.Update(id, type);
        }

        [HttpDelete("{id:int}")]
        public async Task Delete(int id)
        {
            await _materialTypeService.Delete(id);
        }
    }
}
