using System.Threading.Tasks;
using Furdega.Services.FileManagers;
using Furdega.Services.HomePage.Sections;
using Furdega.Services.HomePage.Sections.MainHome;
using Furdega.Services.HomePage.Sections.MainHome.Dtos.Input;
using Furdega.Services.HomePage.Sections.MainHome.Dtos.Output;
using Microsoft.AspNetCore.Mvc;

namespace Furdega.Controllers.HomePage.Sections
{
    //[Authorize]
    [Route("api/sections/main")]
    [ApiController]
    public class MainHomeSectionController : ControllerBase
    {
        private readonly IMainHomeSectionService _sectionService;

        public MainHomeSectionController(IMainHomeSectionService sectionService)
        {
            _sectionService = sectionService;
        }

        //[AllowAnonymous]
        [HttpGet]
        public async Task<MainHomeSectionResponse> Get()
        {
            return await _sectionService.GetSection();
        }

        [HttpPost]
        public async Task<ActionResult> Create(MainHomeSectionRequest section)
        {
            if (!section.IsAllBase64ImagesExist())
            {
                return BadRequest(HomeSectionModelBase.ImagesExistingError);
            }

            if (!section.IsFilesExtensionCorrect())
            {
                return BadRequest(Image.FileFormatError);
            }

            await _sectionService.CreateSection(section);

            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult> Update(MainHomeSectionRequest section)
        {
            if (!section.IsFilesExtensionCorrect())
            {
                return BadRequest(Image.FileFormatError);
            }

            await _sectionService.UpdateSection(section);

            return Ok();
        }
    }
}
