using System.Collections.Generic;
using System.Threading.Tasks;
using Furdega.Models.Furnitures.Input;
using Furdega.Models.Furnitures.Output;
using Furdega.Services.FurnitureTypes;
using Microsoft.AspNetCore.Mvc;

namespace Furdega.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FurnitureTypeController : ControllerBase
    {
        private readonly IFurnitureTypeService _furnitureTypeService;

        public FurnitureTypeController(IFurnitureTypeService furnitureTypeService)
        {
            _furnitureTypeService = furnitureTypeService;
        }

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
