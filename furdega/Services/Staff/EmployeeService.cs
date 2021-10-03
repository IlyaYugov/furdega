using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Furdega.DataAccess.Models;
using Furdega.Repositories.RepositoryBase;
using Furdega.Services.Staff.Dtos.Input;
using Furdega.Services.Staff.Dtos.Output;

namespace Furdega.Services.Staff
{
    public class EmployeeService: IEmployeeService
    {
        private readonly IRepositoryBase<Employee> _employeeRepository;
        private readonly IMapper _mapper;

        public EmployeeService(IRepositoryBase<Employee> employeeRepository, IMapper mapper)
        {
            _employeeRepository = employeeRepository;
            _mapper = mapper;
        }

        public async Task<List<EmployeeResponse>> GetAll()
        {
            var employees = await _employeeRepository.GetItems();

            var response = _mapper.Map<List<EmployeeResponse>>(employees);

            return response;
        }

        public async Task<EmployeeResponse> Get(int id)
        {
            var employee = await _employeeRepository.GetById(id);

            var response = _mapper.Map<EmployeeResponse>(employee);

            return response;
        }

        public async Task<int> Create(EmployeeRequest employeeRequest)
        {
            var employee = _mapper.Map<Employee>(employeeRequest);

            var createdEmployee = await _employeeRepository.Create(employee);

            return createdEmployee.Id;
        }

        public async Task Update(int id, EmployeeRequest employeeRequest)
        {
            var employee = _mapper.Map<Employee>(employeeRequest);

            await _employeeRepository.Update(employee);
        }

        public async Task Delete(int id)
        {
            var employee = await _employeeRepository.GetById(id);

            await _employeeRepository.Delete(employee);
        }
    }
}