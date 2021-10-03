using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Furdega.Services.Staff;
using Furdega.Services.Staff.Dtos.Input;
using Furdega.Services.Staff.Dtos.Output;

namespace Furdega.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StaffController : ControllerBase
    {
        private readonly IEmployeeService _employeeService;

        public StaffController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }

        [HttpGet]
        public async Task<IEnumerable<EmployeeResponse>> GetEmployees()
        {
            return await _employeeService.GetAll();
        }

        [HttpGet("{id:int}")]
        public async Task<EmployeeResponse> GetEmployees(int id)
        {
            return await _employeeService.Get(id);
        }

        [HttpPost]
        public async Task<int> Create([FromBody] EmployeeRequest employee)
        {
            return await _employeeService.Create(employee);
        }

        [HttpPut("{id:int}")]
        public async Task Update(int id, [FromBody] EmployeeRequest employee)
        {
            await _employeeService.Update(id, employee);
        }

        [HttpDelete("{id:int}")]
        public async Task Delete(int id)
        {
            await _employeeService.Delete(id);
        }
    }
}
