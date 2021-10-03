using System.Threading.Tasks;
using Furdega.Services.FileManagers;
using Furdega.Services.HomePage.Sections;
using Furdega.Services.HomePage.Sections.WorkExamples;
using Furdega.Services.HomePage.Sections.WorkExamples.Dtos.Input;
using Furdega.Services.HomePage.Sections.WorkExamples.Dtos.Output;
using Microsoft.AspNetCore.Mvc;

namespace Furdega.Controllers.HomePage.Sections
{
    [Route("api/home/work-examples")]
    [ApiController]
    public class WorkExamplesSectionController : ControllerBase
    {
        private readonly IWorkExamplesSectionService _sectionService;

        public WorkExamplesSectionController(IWorkExamplesSectionService sectionService)
        {
            _sectionService = sectionService;
        }

        [HttpGet]
        public async Task<WorkExamplesSectionResponse> Get()
        {
            return await _sectionService.GetSection();
        }

        [HttpPost]
        public async Task<ActionResult> Create(WorkExamplesSectionRequest section)
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
        public async Task<ActionResult> Update(WorkExamplesSectionRequest section)
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
