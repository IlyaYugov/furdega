using Microsoft.AspNetCore.Http;

namespace Furdega.Dtos.HomePage.Input
{
    public class EmployeeRequest
    {
        public string Title { get; set; }
        public IFormFile Image { get; set; }
        public string Description { get; set; }
    }
}