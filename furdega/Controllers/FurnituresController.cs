using System.Collections.Generic;
using System.Threading.Tasks;
using Furdega.Services.FileManagers;
using Furdega.Services.Furnitures;
using Furdega.Services.Furnitures.Dtos.Input;
using Furdega.Services.Furnitures.Dtos.Output;
using Furdega.Services.HomePage.Sections;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Furdega.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class FurnituresController : ControllerBase
    {
        private readonly IFurnitureService _furnitureService;

        public FurnituresController(IFurnitureService furnitureService)
        {
            _furnitureService = furnitureService;
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<IEnumerable<FurnitureResponse>> GetFurniture(int? typeId)
        {
            return await _furnitureService.GetFiltered(typeId);
        }

        [AllowAnonymous]
        [HttpGet("{id:int}")]
        public async Task<FurnitureResponse> Get(int id)
        {
            return await _furnitureService.Get(id);
        }

        [HttpPost]
        public async Task<ActionResult> Create([FromBody] FurnitureRequest furnitureRequest)
        {
            if (!furnitureRequest.IsAllBase64ImagesExist())
            {
                return BadRequest(HomeSectionModelBase.ImagesExistingError);
            }

            if (!furnitureRequest.IsFilesExtensionCorrect())
            {
                return BadRequest(Image.FileFormatError);
            }

            return Ok(await _furnitureService.Create(furnitureRequest));
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Update(int id, [FromBody] FurnitureRequest furnitureRequest)
        {
            if (!furnitureRequest.IsFilesExtensionCorrect())
            {
                return BadRequest(Image.FileFormatError);
            }

            await _furnitureService.Update(id, furnitureRequest);

            return Ok();
        }

        [HttpDelete("{id:int}")]
        public async Task Delete(int id)
        {
            await _furnitureService.Delete(id);
        }
    }
}
