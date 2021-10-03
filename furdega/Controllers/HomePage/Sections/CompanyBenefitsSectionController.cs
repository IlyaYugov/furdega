using System.Threading.Tasks;
using Furdega.Services.HomePage.Sections;
using Furdega.Services.HomePage.Sections.CompanyBenefits.Dtos.Input;
using Furdega.Services.HomePage.Sections.CompanyBenefits.Dtos.Output;
using Microsoft.AspNetCore.Mvc;

namespace Furdega.Controllers.HomePage.Sections
{
    [Route("api/home/company-benefits")]
    [ApiController]
    public class CompanyBenefitsSectionController: ControllerBase
    {
        private readonly IHomePageSectionService<CompanyBenefitsSectionRequest, CompanyBenefitsSectionResponse> _homePageService;

        public CompanyBenefitsSectionController(IHomePageSectionService<CompanyBenefitsSectionRequest, CompanyBenefitsSectionResponse> homePageService)
        {
            _homePageService = homePageService;
        }

        [HttpGet]
        public async Task<CompanyBenefitsSectionResponse> Get()
        {
            return await _homePageService.GetSection();
        }

        [HttpPost]
        public async Task<ActionResult> Create(CompanyBenefitsSectionRequest section)
        {
            await _homePageService.CreateSection(section);

            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult> Update(CompanyBenefitsSectionRequest section)
        {
            await _homePageService.UpdateSection(section);

            return Ok();
        }
    }
}