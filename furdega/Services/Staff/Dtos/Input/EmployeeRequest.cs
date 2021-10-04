using Furdega.Services.FileManagers;
using Furdega.Services.HomePage.Sections;

namespace Furdega.Services.Staff.Dtos.Input
{
    public class EmployeeRequest: IRequestWithImage
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Image Image { get; set; }
        public string Description { get; set; }

        public bool IsFilesExtensionCorrect()
        {
            return Image == null || Image != null && Image.IsFileExtensionCorrect();
        }

        public bool IsAllBase64ImagesExist() => Image?.Base64ImageString != null;
    }
}