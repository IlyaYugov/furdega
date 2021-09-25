using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Furdega.Models.Portfolios;
using Furdega.Models.Portfolios.Input;
using Furdega.Models.Portfolios.Output;
using Microsoft.AspNetCore.Mvc;

namespace Furdega.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductTypeController : ControllerBase
    {
        [HttpGet]
        public async Task<IEnumerable<ProductTypeResponse>> GetTypes()
        {
            return Array.Empty<ProductTypeResponse>();
        }

        [HttpPost]
        public async Task<int> Create([FromBody] UpdateProductTypeRequest type)
        {
            return 0;
        }

        [HttpPut("{id:int}")]
        public async Task<int> Update(int id, [FromBody] UpdateProductTypeRequest type)
        {
            return 0;
        }

        [HttpDelete("{id:int}")]
        public async Task Delete(int id)
        {
        }
    }
}
