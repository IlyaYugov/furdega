using System.Threading.Tasks;
using Furdega.Services.HomePage.Sections;
using Furdega.Services.HomePage.Sections.About.Dtos.Input;
using Furdega.Services.HomePage.Sections.About.Dtos.Output;
using Microsoft.AspNetCore.Mvc;

namespace Furdega.Controllers.HomePage.Sections
{
    [Route("api/home/about-section")]
    [ApiController]
    public class AboutSectionController : ControllerBase
    {
        private readonly IHomePageSectionService<AboutSectionRequest, AboutSectionResponse> _homePageService;

        public AboutSectionController(IHomePageSectionService<AboutSectionRequest, AboutSectionResponse> homePageService)
        {
            _homePageService = homePageService;
        }

        [HttpGet]
        public async Task<AboutSectionResponse> Get()
        {
            return await _homePageService.GetSection();
        }

        [HttpPost]
        public async Task<ActionResult> Create(AboutSectionRequest section)
        {
            await _homePageService.CreateSection(section);

            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult> Update(AboutSectionRequest section)
        {
            await _homePageService.UpdateSection(section);

            return Ok();
        }
    }
}
