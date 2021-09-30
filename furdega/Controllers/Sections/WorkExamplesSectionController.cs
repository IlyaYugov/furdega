using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Furdega.DataAccess.Models.Enums;
using Furdega.Dtos.HomePage.Input;
using Furdega.Services.FileManagers;
using Furdega.Services.HomePage;

namespace Furdega.Controllers.Sections
{
    [Route("api/work-examples-section")]
    [ApiController]
    public class WorkExamplesSectionController : ControllerBase
    {
        private readonly IHomePageService _homePageService;

        public WorkExamplesSectionController(IHomePageService homePageService)
        {
            _homePageService = homePageService;
        }

        [HttpGet]
        public async Task<object> Get()
        {
            return await _homePageService.GetSection(HomePageSectionType.WorkExamplesSection);
        }

        [HttpPost]
        public async Task<ActionResult> Create(WorkExamplesSectionRequest section)
        {
            if (!section.IsFilesExtensionCorrect())
            {
                return BadRequest(FileManager.FileExtensionError);
            }

            await _homePageService.CreateOrUpdateWorkExamplesSection(section);

            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult> Update(WorkExamplesSectionRequest section)
        {
            if (!section.IsFilesExtensionCorrect())
            {
                return BadRequest(FileManager.FileExtensionError);
            }

            await _homePageService.CreateOrUpdateWorkExamplesSection(section);

            return Ok();
        }
    }
}
