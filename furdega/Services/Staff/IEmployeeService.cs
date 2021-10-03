using System.Collections.Generic;
using System.Threading.Tasks;
using Furdega.Services.Staff.Dtos.Input;
using Furdega.Services.Staff.Dtos.Output;

namespace Furdega.Services.Staff
{
    public interface IEmployeeService
    {
        Task<List<EmployeeResponse>> GetAll();
        Task<EmployeeResponse> Get(int id);
        Task<int> Create(EmployeeRequest employeeRequest);
        Task Update(int id, EmployeeRequest employeeRequest);
        Task Delete(int id);
    }
}