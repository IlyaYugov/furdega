using Furdega.Services.FileManagers;

namespace Furdega.Services.Staff.Dtos.Output
{
    public class EmployeeResponse
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public ImageResponse Image { get; set; }
        public string Description { get; set; }
    }
}