using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Furdega.Services.FileManagers;
using Furdega.Services.HomePage.Sections;
using Furdega.Services.Materials;
using Furdega.Services.Materials.Dtos.Input;
using Furdega.Services.Materials.Dtos.Output;
using Microsoft.AspNetCore.Mvc;

namespace Furdega.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MaterialController : ControllerBase
    {
        private readonly IMaterialService _materialService;

        public MaterialController(IMaterialService materialService)
        {
            _materialService = materialService;
        }

        [HttpGet]
        public async Task<IEnumerable<MaterialResponse>> GetMaterials(int? materialTypeId)
        {
            return await _materialService.GetFiltered(materialTypeId);
        }

        [HttpGet("{id:int}")]
        public async Task<MaterialResponse> Get(int id)
        {
            return await _materialService.Get(id);
        }

        [HttpPost]
        public async Task<ActionResult> Create([FromBody] MaterialRequest materialRequest)
        {
            if (!materialRequest.IsAllBase64ImagesExist())
            {
                return BadRequest(HomeSectionModelBase.ImagesExistingError);
            }

            if (!materialRequest.IsFilesExtensionCorrect())
            {
                return BadRequest(Image.FileFormatError);
            }

            return Ok(await _materialService.Create(materialRequest));
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Update(int id, [FromBody] MaterialRequest materialRequest)
        {
            if (!materialRequest.IsFilesExtensionCorrect())
            {
                return BadRequest(Image.FileFormatError);
            }

            await _materialService.Update(id, materialRequest);

            return Ok();
        }

        [HttpDelete("{id:int}")]
        public async Task Delete(int id)
        {
            await _materialService.Delete(id);
        }
    }
}
