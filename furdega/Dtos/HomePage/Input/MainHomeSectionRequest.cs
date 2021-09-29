using Furdega.Services.FileManagers;
using Microsoft.AspNetCore.Http;

namespace Furdega.Dtos.HomePage.Input
{
    public class MainHomeSectionRequest: HomeSectionBase
    {
        public IFormFile Image { get; set; }

        public bool IsFilesExtensionCorrect() => Image != null && FileManager.IsFileExtensionCorrect(Image.FileName);
    }
}