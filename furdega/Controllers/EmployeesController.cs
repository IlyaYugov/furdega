using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Furdega.Services.FileManagers;
using Furdega.Services.HomePage.Sections;
using Furdega.Services.Staff;
using Furdega.Services.Staff.Dtos.Input;
using Furdega.Services.Staff.Dtos.Output;
using Microsoft.AspNetCore.Authorization;

namespace Furdega.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly IEmployeeService _employeeService;

        public EmployeesController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<IEnumerable<EmployeeResponse>> GetEmployees()
        {
            return await _employeeService.GetAll();
        }

        [AllowAnonymous]
        [HttpGet("{id:int}")]
        public async Task<EmployeeResponse> GetEmployees(int id)
        {
            return await _employeeService.Get(id);
        }

        [HttpPost]
        public async Task<ActionResult> Create([FromBody] EmployeeRequest employee)
        {
            if (!employee.IsAllBase64ImagesExist())
            {
                return BadRequest(HomeSectionModelBase.ImagesExistingError);
            }

            if (!employee.IsFilesExtensionCorrect())
            {
                return BadRequest(Image.FileFormatError);
            }

            return Ok(await _employeeService.Create(employee));
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Update(int id, [FromBody] EmployeeRequest employee)
        {
            if (!employee.IsFilesExtensionCorrect())
            {
                return BadRequest(Image.FileFormatError);
            }

            await _employeeService.Update(id, employee);

            return Ok();
        }

        [HttpDelete("{id:int}")]
        public async Task Delete(int id)
        {
            await _employeeService.Delete(id);
        }
    }
}
