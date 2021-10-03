using System.Threading.Tasks;
using Furdega.Services.FileManagers;
using Furdega.Services.HomePage.Sections;
using Furdega.Services.HomePage.Sections.MainHome.Dtos.Input;
using Furdega.Services.HomePage.Sections.MainHome.Dtos.Output;
using Microsoft.AspNetCore.Mvc;

namespace Furdega.Controllers.HomePage.Sections
{
    [Route("api/home/main")]
    [ApiController]
    public class MainHomeSectionController : ControllerBase
    {
        private readonly IHomePageSectionService<MainHomeSectionRequest, MainHomeSectionResponse> _homePageService;

        public MainHomeSectionController(IHomePageSectionService<MainHomeSectionRequest, MainHomeSectionResponse> homePageService)
        {
            _homePageService = homePageService;
        }

        [HttpGet]
        public async Task<MainHomeSectionResponse> Get()
        {
            return await _homePageService.GetSection();
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

            await _homePageService.CreateSection(section);

            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult> Update(MainHomeSectionRequest section)
        {
            if (!section.IsFilesExtensionCorrect())
            {
                return BadRequest(Image.FileFormatError);
            }

            await _homePageService.UpdateSection(section);

            return Ok();
        }
    }
}
