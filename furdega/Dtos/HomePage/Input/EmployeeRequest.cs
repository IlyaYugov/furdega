using Furdega.Services.FileManagers;

namespace Furdega.Dtos.HomePage.Input
{
    public class EmployeeRequest
    {
        public string Title { get; set; }
        public Image Image { get; set; }
        public string Description { get; set; }
    }
}