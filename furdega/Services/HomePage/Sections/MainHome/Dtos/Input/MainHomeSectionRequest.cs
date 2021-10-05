using Furdega.Services.FileManagers;

namespace Furdega.Services.HomePage.Sections.MainHome.Dtos.Input
{
    public class MainHomeSectionRequest: HomeSectionModelBase, IRequestWithImage
    {
        public Image Image { get; set; }

        public bool IsFilesExtensionCorrect() => string.IsNullOrEmpty(Image?.Base64ImageString) ||
                                                 !string.IsNullOrEmpty(Image?.Base64ImageString) && Image.IsFileExtensionCorrect();
        public bool IsAllBase64ImagesExist() => !string.IsNullOrEmpty(Image?.Base64ImageString);
    }
}