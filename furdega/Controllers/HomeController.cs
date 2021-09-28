using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Furdega.DataAccess.Models.Enums;
using Furdega.Dtos.HomePage;
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

        [HttpPost(nameof(MainHomeSection))]
        public async Task CreateOrUpdateMainHomeSection(MainHomeSection section)
        {
            await _homePageService.CreateOrUpdateSection(HomePageSectionType.MainHomeSection, section);
        }

        [HttpPost(nameof(AboutSection))]
        public async Task CreateOrUpdateAboutSection(AboutSection section)
        {
            await _homePageService.CreateOrUpdateSection(HomePageSectionType.AboutSection, section);
        }

        [HttpPost(nameof(WorkExamplesSection))]
        public async Task CreateOrUpdateWorkExamplesSection(WorkExamplesSection section)
        {
            await _homePageService.CreateOrUpdateSection(HomePageSectionType.WorkExamplesSection, section);
        }

        [HttpPost(nameof(CompanyBenefitsSection))]
        public async Task CreateOrUpdateCompanyBenefitsSection(CompanyBenefitsSection section)
        {
            await _homePageService.CreateOrUpdateSection(HomePageSectionType.CompanyBenefitsSection, section);
        }

        [HttpPost(nameof(IssueSolutionsSection))]
        public async Task CreateOrUpdateIssueSolutionsSection(IssueSolutionsSection section)
        {
            await _homePageService.CreateOrUpdateSection(HomePageSectionType.IssueSolutionsSection, section);
        }

        [HttpPost(nameof(WorkingProcessSection))]
        public async Task CreateOrUpdateWorkingProcessSection(WorkingProcessSection section)
        {
            await _homePageService.CreateOrUpdateSection(HomePageSectionType.WorkingProcessSection, section);
        }

        [HttpPost(nameof(StaffSection))]
        public async Task CreateOrUpdateStaffSection(StaffSection section)
        {
            await _homePageService.CreateOrUpdateSection(HomePageSectionType.StaffSection, section);
        }
    }
}
