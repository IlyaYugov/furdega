using Furdega.Services.FileManagers;

namespace Furdega.Dtos.HomePage.Input
{
    public class MainHomeSectionRequest: HomeSectionBase
    {
        public string Image { get; set; }

        public bool IsFilesExtensionCorrect() => string.IsNullOrEmpty(Image) || !string.IsNullOrEmpty(Image) && FileManager.IsFileExtensionCorrect(Image);
    }
}