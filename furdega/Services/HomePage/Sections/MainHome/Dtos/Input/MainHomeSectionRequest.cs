using Furdega.Services.FileManagers;

namespace Furdega.Services.HomePage.Sections.MainHome.Dtos.Input
{
    public class MainHomeSectionRequest: HomeSectionModelBase, IRequestWithImage
    {
        public Image Image { get; set; }

        public bool IsFilesExtensionCorrect() => Image == null || Image != null && Image.IsFileExtensionCorrect();
        public bool IsAllBase64ImagesExist() => Image?.Base64ImageString != null;
    }
}