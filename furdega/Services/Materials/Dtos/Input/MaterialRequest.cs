using System.Linq;
using Furdega.Services.FileManagers;
using Furdega.Services.HomePage.Sections;

namespace Furdega.Services.Materials.Dtos.Input
{
    public class MaterialRequest: IRequestWithImage
    {
        public string Title { get; set; }

        public Image MainImage { get; set; }

        public Image PreviewImage { get; set; }

        public bool IsFilesExtensionCorrect()
        {
            var imagesForUpdate = AllImages.Where(s => !string.IsNullOrEmpty(s?.Base64ImageString));


            return !imagesForUpdate.Any() ||
                   imagesForUpdate.Any() && imagesForUpdate.All(s => s.IsFileExtensionCorrect());
        }

        public bool IsAllBase64ImagesExist() => AllImages.All(s => !string.IsNullOrEmpty(s?.Base64ImageString));

        private Image[] AllImages => new[]
        {
            MainImage, 
            PreviewImage
        };
    }
}