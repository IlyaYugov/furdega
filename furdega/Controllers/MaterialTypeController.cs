using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Furdega.Models.MaterialTypes.Input;
using Furdega.Models.MaterialTypes.Output;
using Microsoft.AspNetCore.Authorization;

namespace Furdega.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class MaterialTypeController : ControllerBase
    {
        [AllowAnonymous]
        [HttpGet]
        public async Task<IEnumerable<MaterialTypeResponse>> GetTypes()
        {
            return Array.Empty<MaterialTypeResponse>();
        }

        [HttpPost]
        public async Task<int> Create([FromBody] UpdateMaterialTypeRequest type)
        {
            return 0;
        }

        [HttpPut("{id:int}")]
        public async Task<int> Update(int id, [FromBody] UpdateMaterialTypeRequest type)
        {
            return 0;
        }

        [HttpDelete("{id:int}")]
        public async Task Delete(int id)
        {
        }
    }
}
