using Furdega.Services.FileManagers;
using Furdega.Services.HomePage.Sections;

namespace Furdega.Services.Staff.Dtos.Input
{
    public class EmployeeRequest: IRequestWithImage
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Image Image { get; set; }
        public string Description { get; set; }

        public bool IsFilesExtensionCorrect() => string.IsNullOrEmpty(Image?.Base64ImageString) ||
                                                 !string.IsNullOrEmpty(Image?.Base64ImageString) && Image.IsFileExtensionCorrect();
        public bool IsAllBase64ImagesExist() => !string.IsNullOrEmpty(Image?.Base64ImageString);
    }
}