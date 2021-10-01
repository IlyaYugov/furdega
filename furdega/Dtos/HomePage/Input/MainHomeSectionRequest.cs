using Furdega.Dtos.HomePage.Input.Interfaces;
using Furdega.Services.FileManagers;

namespace Furdega.Dtos.HomePage.Input
{
    public class MainHomeSectionRequest: HomeSectionBase, ISectionRequestWithImage
    {
        public Image Image { get; set; }

        public bool IsFilesExtensionCorrect() => Image == null || Image != null && Image.IsFileExtensionCorrect();
        public bool IsAllBase64ImagesExist() => Image != null;
    }
}