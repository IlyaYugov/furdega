﻿using System.Threading.Tasks;
using Furdega.Services.HomePage.Sections.WorkingProcess;
using Furdega.Services.HomePage.Sections.WorkingProcess.Dtos.Input;
using Furdega.Services.HomePage.Sections.WorkingProcess.Dtos.Output;
using Microsoft.AspNetCore.Mvc;

namespace Furdega.Controllers.HomePage.Sections
{
    [Route("api/home/working-process")]
    [ApiController]
    public class WorkingProcessSectionController : ControllerBase
    {
        private readonly IWorkingProcessSectionService _sectionService;

        public WorkingProcessSectionController(IWorkingProcessSectionService sectionService)
        {
            _sectionService = sectionService;
        }

        [HttpGet]
        public async Task<WorkingProcessSectionResponse> Get()
        {
            return await _sectionService.GetSection();
        }

        [HttpPost]
        public async Task<ActionResult> Create(WorkingProcessSectionRequest section)
        {
            await _sectionService.CreateSection(section);

            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult> Update(WorkingProcessSectionRequest section)
        {
            await _sectionService.UpdateSection(section);

            return Ok();
        }
    }
}
