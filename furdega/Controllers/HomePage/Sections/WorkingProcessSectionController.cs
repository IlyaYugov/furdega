using System.Threading.Tasks;
using Furdega.Services.FileManagers;
using Furdega.Services.HomePage.Sections;
using Furdega.Services.HomePage.Sections.WorkingProcess.Dtos.Input;
using Furdega.Services.HomePage.Sections.WorkingProcess.Dtos.Output;
using Microsoft.AspNetCore.Mvc;

namespace Furdega.Controllers.HomePage.Sections
{
    [Route("api/home/working-process")]
    [ApiController]
    public class WorkingProcessSectionController : ControllerBase
    {
        private readonly IHomePageSectionService<WorkingProcessSectionRequest, WorkingProcessSectionResponse> _homePageService;

        public WorkingProcessSectionController(IHomePageSectionService<WorkingProcessSectionRequest, WorkingProcessSectionResponse> homePageService)
        {
            _homePageService = homePageService;
        }

        [HttpGet]
        public async Task<WorkingProcessSectionResponse> Get()
        {
            return await _homePageService.GetSection();
        }

        [HttpPost]
        public async Task<ActionResult> Create(WorkingProcessSectionRequest section)
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
        public async Task<ActionResult> Update(WorkingProcessSectionRequest section)
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
