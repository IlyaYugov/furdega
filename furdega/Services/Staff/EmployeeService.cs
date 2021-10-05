using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Furdega.DataAccess.Models;
using Furdega.Repositories.RepositoryBase;
using Furdega.Services.FileManagers;
using Furdega.Services.Staff.Dtos.Input;
using Furdega.Services.Staff.Dtos.Output;

namespace Furdega.Services.Staff
{
    public class EmployeeService: IEmployeeService
    {
        private readonly IRepositoryBase<Employee> _employeeRepository;
        private readonly IMapper _mapper;
        private readonly IImageManager _imageManager;

        public EmployeeService(IRepositoryBase<Employee> employeeRepository, IMapper mapper, IImageManager imageManager)
        {
            _employeeRepository = employeeRepository;
            _mapper = mapper;
            _imageManager = imageManager;
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

            var newImage = await _imageManager.CreateImage(employeeRequest.Image);
            employee.ImageUrl = newImage?.ImageUrl;

            var createdEmployee = await _employeeRepository.Create(employee);

            return createdEmployee.Id;
        }

        public async Task Update(int id, EmployeeRequest employeeRequest)
        {
            var employee = await _employeeRepository.GetById(id);

            _mapper.Map(employeeRequest, employee);
            employee.Id = id;

            if (!string.IsNullOrEmpty(employeeRequest.Image?.Base64ImageString))
            {
                var newImage = await _imageManager.UpdateImage(employeeRequest.Image, employee.ImageUrl);
                employee.ImageUrl = newImage?.ImageUrl;
            }

            await _employeeRepository.Update(employee);
        }

        public async Task Delete(int id)
        {
            var employee = await _employeeRepository.GetById(id);

            await _employeeRepository.Delete(employee);
        }
    }
}