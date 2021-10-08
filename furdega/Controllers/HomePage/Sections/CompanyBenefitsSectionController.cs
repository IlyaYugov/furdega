using System.Threading.Tasks;
using Furdega.Services.FileManagers;
using Furdega.Services.HomePage.Sections;
using Furdega.Services.HomePage.Sections.CompanyBenefits;
using Furdega.Services.HomePage.Sections.CompanyBenefits.Dtos.Input;
using Furdega.Services.HomePage.Sections.CompanyBenefits.Dtos.Output;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Furdega.Controllers.HomePage.Sections
{
	Authorize]
    [Route("api/sections/company-benefits")]
    [ApiController]
    public class CompanyBenefitsSectionController: ControllerBase
    {
        private readonly ICompanyBenefitsSectionService _sectionService;

        public CompanyBenefitsSectionController(ICompanyBenefitsSectionService sectionService)
        {
            _sectionService = sectionService;
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<CompanyBenefitsSectionResponse> Get()
        {
            return await _sectionService.GetSection();
        }

        [HttpPost]
        public async Task<ActionResult> Create(CompanyBenefitsSectionRequest section)
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
        public async Task<ActionResult> Update(CompanyBenefitsSectionRequest section)
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