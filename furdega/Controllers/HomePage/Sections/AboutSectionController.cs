using System.Threading.Tasks;
using Furdega.Services.HomePage.Sections.About;
using Furdega.Services.HomePage.Sections.About.Dtos.Input;
using Furdega.Services.HomePage.Sections.About.Dtos.Output;
using Microsoft.AspNetCore.Mvc;

namespace Furdega.Controllers.HomePage.Sections
{
    [Route("api/home/about")]
    [ApiController]
    public class AboutSectionController : ControllerBase
    {
        private readonly IAboutSectionService _sectionService;

        public AboutSectionController(IAboutSectionService sectionService)
        {
            _sectionService = sectionService;
        }

        [HttpGet]
        public async Task<AboutSectionResponse> Get()
        {
            return await _sectionService.GetSection();
        }

        [HttpPost]
        public async Task<ActionResult> Create(AboutSectionRequest section)
        {
            await _sectionService.CreateSection(section);

            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult> Update(AboutSectionRequest section)
        {
            await _sectionService.UpdateSection(section);

            return Ok();
        }
    }
}
