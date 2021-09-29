using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Furdega.DataAccess.Models.Enums;
using Furdega.Dtos.HomePage;
using Furdega.Dtos.HomePage.Input;
using Furdega.Dtos.HomePage.Output;
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

        [HttpPost(nameof(AboutSectionRequest))]
        public async Task CreateOrUpdateAboutSection(AboutSectionRequest section)
        {
            await _homePageService.CreateOrUpdateSection(HomePageSectionType.AboutSection, section);
        }

        [HttpPost(nameof(WorkingProcessSectionRequest))]
        public async Task CreateOrUpdateWorkingProcessSection(WorkingProcessSectionRequest section)
        {
            await _homePageService.CreateOrUpdateSection(HomePageSectionType.WorkingProcessSection, section);
        }


        [HttpPost(nameof(StaffSectionRequest))]
        public async Task<ObjectResult> CreateOrUpdateStaffSection([FromForm] StaffSectionRequest section)
        {
            var fileExtensions =
                section.Employees?.Where(s => s.Image != null).Select(s => s.Image.FileName)
                    .ToList();

            if (fileExtensions != null && fileExtensions.Any() && fileExtensions.All(s => s.Equals(".jpeg", StringComparison.OrdinalIgnoreCase)))
            {
                return BadRequest("Not Support file extension");
            }

            await _homePageService.CreateOrUpdateStaffSection(section);

            return Ok(new { });
        }

        [HttpPost(nameof(MainHomeSectionRequest))]
        public async Task<ObjectResult> CreateOrUpdateMainHomeSection([FromForm] MainHomeSectionRequest section)
        {
            if (section.Image != null && !Path.GetExtension(section.Image.FileName).Equals(".jpg", StringComparison.OrdinalIgnoreCase))
            {
                return BadRequest("Not Support file extension");
            }

            await _homePageService.CreateOrUpdateMainHomeSection(section);

            return Ok(new {});
        }

        [HttpPost(nameof(WorkExamplesSectionRequest))]
        public async Task<ObjectResult> CreateOrUpdateWorkExamplesSection([FromForm] WorkExamplesSectionRequest section)
        {
            var fileExtensions =
                section.WorkExamples?.Where(s=>s.AfterImages != null).SelectMany(s => s.AfterImages)
                    .Union(section.WorkExamples?.Where(s => s.BeforeImages != null).SelectMany(s => s.BeforeImages))
                    .Select(s => Path.GetExtension(s.FileName))
                    .ToList();

            if (fileExtensions != null && fileExtensions.Any() && fileExtensions.All(s => s.Equals(".jpeg", StringComparison.OrdinalIgnoreCase)))
            {
                return BadRequest("Not Support file extension");
            }

            await _homePageService.CreateOrUpdateWorkExamplesSection(section);

            return Ok(new { });
        }

        [HttpPost(nameof(CompanyBenefitsSectionRequest))]
        public async Task<ObjectResult> CreateOrUpdateCompanyBenefitsSection([FromForm] CompanyBenefitsSectionRequest section)
        {
            var fileExtensions =
                section.CompanyBenefits?.Where(s => s.Image != null).Select(s => s.Image.FileName)
                    .ToList();

            if (fileExtensions != null && fileExtensions.Any() && fileExtensions.All(s => s.Equals(".jpeg", StringComparison.OrdinalIgnoreCase)))
            {
                return BadRequest("Not Support file extension");
            }

            await _homePageService.CreateOrUpdateCompanyBenefitsSection(section);

            return Ok(new { });
        }

        [HttpPost(nameof(IssueSolutionsSectionRequest))]
        public async Task<ObjectResult> CreateOrUpdateIssueSolutionsSection([FromForm] IssueSolutionsSectionRequest section)
        {
            var fileExtensions =
                section.IssueSolutions?.Where(s => s.Image != null).Select(s => s.Image.FileName)
                    .ToList();

            if (fileExtensions != null && fileExtensions.Any() && fileExtensions.All(s => s.Equals(".jpeg", StringComparison.OrdinalIgnoreCase)))
            {
                return BadRequest("Not Support file extension");
            }

            await _homePageService.CreateOrUpdateIssueSolutionsSection(section);

            return Ok(new { });
        }
    }
}
