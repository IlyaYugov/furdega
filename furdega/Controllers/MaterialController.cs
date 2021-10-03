using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Furdega.Services.Materials.Dtos.Input;
using Furdega.Services.Materials.Dtos.Output;
using Microsoft.AspNetCore.Mvc;

namespace Furdega.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MaterialController : ControllerBase
    {
        [HttpGet]
        public async Task<IEnumerable<MaterialResponse>> GetMaterials()
        {
            return Array.Empty<MaterialResponse>();
        }

        [HttpPost]
        public async Task<int> Create([FromBody] UpdateMaterialResponse material)
        {
            return 0;
        }

        [HttpPut("{id:int}")]
        public async Task<int> Update(int id, [FromBody] UpdateMaterialResponse material)
        {
            return 0;
        }

        [HttpDelete("{id:int}")]
        public async Task Delete(int id)
        {
        }
    }
}
