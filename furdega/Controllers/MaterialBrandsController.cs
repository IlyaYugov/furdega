using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Furdega.Services.FileManagers;
using Furdega.Services.MaterialBrands;
using Furdega.Services.MaterialBrands.Dtos.Input;
using Furdega.Services.MaterialBrands.Dtos.Output;
using Microsoft.AspNetCore.Authorization;

namespace Furdega.Controllers
{
    [Authorize]
    [Route("api/material-brands")]
    [ApiController]
    public class MaterialBrandsController : ControllerBase
    {
        private readonly IMaterialBrandService _materialBrandService;

        public MaterialBrandsController(IMaterialBrandService materialBrandService)
        {
            _materialBrandService = materialBrandService;
        }

        [AllowAnonymous]
        [HttpGet("{id:int}")]
        public async Task<MaterialBrandResponse> Get(int id)
        {
            return await _materialBrandService.Get(id);
        }

        [HttpPost]
        public async Task<ActionResult> Create([FromBody] MaterialBrandRequest brandRequest)
        {
            if (!brandRequest.IsFilesExtensionCorrect())
            {
                return BadRequest(Image.FileFormatError);
            }

            return Ok(await _materialBrandService.Create(brandRequest));
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Update(int id, [FromBody] MaterialBrandRequest brandRequest)
        {
            if (!brandRequest.IsFilesExtensionCorrect())
            {
                return BadRequest(Image.FileFormatError);
            }

            await _materialBrandService.Update(id, brandRequest);

            return Ok();
        }

        [HttpDelete("{id:int}")]
        public async Task Delete(int id)
        {
            await _materialBrandService.Delete(id);
        }
    }
}
