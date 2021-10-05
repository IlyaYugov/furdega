using System.Threading.Tasks;
using Furdega.Services.HomePage.Sections.Staff;
using Furdega.Services.HomePage.Sections.Staff.Dtos.Input;
using Furdega.Services.HomePage.Sections.Staff.Dtos.Output;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Furdega.Controllers.HomePage.Sections
{
    [Authorize]
    [Route("api/home/staff")]
    [ApiController]
    public class StaffSectionController : ControllerBase
    {
        private readonly IStaffSectionService _sectionService;

        public StaffSectionController(IStaffSectionService sectionService)
        {
            _sectionService = sectionService;
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<StaffResponse> Get()
        {
            return await _sectionService.GetSection();
        }

        [HttpPost]
        public async Task<ActionResult> Create(StaffRequest section)
        {
            await _sectionService.CreateSection(section);

            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult> Update(StaffRequest section)
        {
            await _sectionService.UpdateSection(section);

            return Ok();
        }
    }
}
