using Furdega.Services.FileManagers;

namespace Furdega.Services.Staff.Dtos.Output
{
    public class EmployeeResponse
    {
        public string Title { get; set; }
        public ImageResponse Image { get; set; }
        public string Description { get; set; }
    }
}