﻿using System.Threading.Tasks;
using Furdega.Services.FileManagers;
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
            if (!section.IsAllBase64ImagesExist())
            {
                return BadRequest(HomeSectionModelBase.ImagesExistingError);
            }

            if (!section.IsFilesExtensionCorrect())
            {
                return BadRequest(Image.FileFormatError);
            }

            await _homePageService.CreateSection(section);

            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult> Update(CompanyBenefitsSectionRequest section)
        {
            if (!section.IsAllBase64ImagesExist())
            {
                return BadRequest(HomeSectionModelBase.ImagesExistingError);
            }

            if (!section.IsFilesExtensionCorrect())
            {
                return BadRequest(Image.FileFormatError);
            }

            await _homePageService.UpdateSection(section);

            return Ok();
        }
    }
}