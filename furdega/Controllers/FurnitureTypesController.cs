using System.Collections.Generic;
using System.Threading.Tasks;
using Furdega.Services.FurnitureTypes;
using Furdega.Services.FurnitureTypes.Dtos.Input;
using Furdega.Services.FurnitureTypes.Dtos.Output;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Furdega.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class FurnitureTypesController : ControllerBase
    {
        private readonly IFurnitureTypeService _furnitureTypeService;

        public FurnitureTypesController(IFurnitureTypeService furnitureTypeService)
        {
            _furnitureTypeService = furnitureTypeService;
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<IEnumerable<FurnitureTypeResponse>> GetTypes()
        {
            return await _furnitureTypeService.GetTypes();
        }

        [HttpPost]
        public async Task<int> Create([FromBody] UpdateFurnitureTypeRequest type)
        {
            return await _furnitureTypeService.Create(type);
        }

        [HttpPut("{id:int}")]
        public async Task Update(int id, [FromBody] UpdateFurnitureTypeRequest type)
        {
            await _furnitureTypeService.Update(id, type);
        }

        [HttpDelete("{id:int}")]
        public async Task Delete(int id)
        {
            await _furnitureTypeService.Delete(id);
        }
    }
}
