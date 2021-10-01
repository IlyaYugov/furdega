using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Furdega.DataAccess.Models.Enums;
using Furdega.Dtos.HomePage.Input;
using Furdega.Dtos.HomePage.Output;
using Furdega.Services.FileManagers;
using Furdega.Services.HomePage;

namespace Furdega.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly IHomePageService _homePageService;

        public HomeController(IHomePageService homePageService)
        {
            _homePageService = homePageService;
        }

        [HttpGet]
        public async Task<HomePageContent> GetHomePageContent()
        {
            return await _homePageService.GetFullPage();
        }

        [HttpGet("about-section")]
        public async Task<object> GetAboutSection()
        {
            return await _homePageService.GetSection(HomePageSectionType.AboutSection);
        }

        [HttpGet("working-process-section")]
        public async Task<object> GetWorkingProcessSection()
        {
            return await _homePageService.GetSection(HomePageSectionType.WorkingProcessSection);
        }

        [HttpGet("staff-section")]
        public async Task<object> GetStaffSection()
        {
            return await _homePageService.GetSection(HomePageSectionType.StaffSection);
        }

        [HttpGet("main-home-section")]
        public async Task<object> GetMainHomeSection()
        {
            return await _homePageService.GetSection(HomePageSectionType.MainHomeSection);
        }

        [HttpGet("company-benefits-section")]
        public async Task<object> GetCompanyBenefitsSection()
        {
            return await _homePageService.GetSection(HomePageSectionType.CompanyBenefitsSection);
        }

        [HttpGet("issue-solutions-section")]
        public async Task<object> GetIssueSolutionsSection()
        {
            return await _homePageService.GetSection(HomePageSectionType.IssueSolutionsSection);
        }

        [HttpPost("about-section")]
        public async Task CreateOrUpdateAboutSection(AboutSectionRequest section)
        {
            await _homePageService.CreateOrUpdateSection(HomePageSectionType.AboutSection, section);
        }

        [HttpPost("working-process-section")]
        public async Task CreateOrUpdateWorkingProcessSection(WorkingProcessSectionRequest section)
        {
            await _homePageService.CreateOrUpdateSection(HomePageSectionType.WorkingProcessSection, section);
        }

        [HttpPost("staff-section")]
        public async Task<ObjectResult> CreateOrUpdateStaffSection(StaffSectionRequest section)
        {
            if (!section.IsFilesExtensionCorrect())
            {
                return BadRequest(ImageManager.FileExtensionError);
            }

            await _homePageService.CreateOrUpdateStaffSection(section);

            return Ok(new { });
        }

        [HttpPost("main-home-section")]
        public async Task<ObjectResult> CreateOrUpdateMainHomeSection(MainHomeSectionRequest section)
        {
            if (!section.IsFilesExtensionCorrect())
            {
                return BadRequest(ImageManager.FileExtensionError);
            }

            await _homePageService.CreateOrUpdateMainHomeSection(section);

            return Ok(new {});
        }

        [HttpPost("work-examples-section")]
        public async Task<ObjectResult> CreateOrUpdateWorkExamplesSection(WorkExamplesSectionRequest section)
        {
            if (!section.IsFilesExtensionCorrect())
            {
                return BadRequest(ImageManager.FileExtensionError);
            }

            await _homePageService.CreateOrUpdateWorkExamplesSection(section);

            return Ok(new { });
        }

        [HttpPost("company-benefits-section")]
        public async Task<ObjectResult> CreateOrUpdateCompanyBenefitsSection(CompanyBenefitsSectionRequest section)
        {
            if (section.IsFilesExtensionCorrect())
            {
                return BadRequest(ImageManager.FileExtensionError);
            }

            await _homePageService.CreateOrUpdateCompanyBenefitsSection(section);

            return Ok(new { });
        }

        [HttpPost("issue-solutions-section")]
        public async Task<ObjectResult> CreateOrUpdateIssueSolutionsSection(IssueSolutionsSectionRequest section)
        {
            if (section.IsFilesExtensionCorrect())
            {
                return BadRequest(ImageManager.FileExtensionError);
            }

            await _homePageService.CreateOrUpdateIssueSolutionsSection(section);

            return Ok(new { });
        }
    }
}
