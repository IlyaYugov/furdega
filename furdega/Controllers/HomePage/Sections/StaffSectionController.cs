using System.Threading.Tasks;
using Furdega.Services.HomePage.Sections;
using Furdega.Services.HomePage.Sections.About.Dtos.Input;
using Furdega.Services.HomePage.Sections.About.Dtos.Output;
using Furdega.Services.HomePage.Sections.Staff.Dtos.Input;
using Furdega.Services.HomePage.Sections.Staff.Dtos.Output;
using Microsoft.AspNetCore.Mvc;

namespace Furdega.Controllers.HomePage.Sections
{
    [Route("api/home/staff")]
    [ApiController]
    public class StaffSectionController : ControllerBase
    {
        private readonly IHomePageSectionService<StaffRequest, StaffResponse> _homePageService;

        public StaffSectionController(IHomePageSectionService<StaffRequest, StaffResponse> homePageService)
        {
            _homePageService = homePageService;
        }

        [HttpGet]
        public async Task<StaffResponse> Get()
        {
            return await _homePageService.GetSection();
        }

        [HttpPost]
        public async Task<ActionResult> Create(StaffRequest section)
        {
            await _homePageService.CreateSection(section);

            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult> Update(StaffRequest section)
        {
            await _homePageService.UpdateSection(section);

            return Ok();
        }
    }
}
