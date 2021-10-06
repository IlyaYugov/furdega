using System.Collections.Generic;
using System.Linq;
using Furdega.Services.FileManagers;
using Furdega.Services.HomePage.Sections;

namespace Furdega.Services.MaterialBrands.Dtos.Input
{
    public class MaterialBrandRequest: IRequestWithImage
    {
        public string Title { get; set; }

        public string Description { get; set; }

        public int MaterialId { get; set; }

        public Image MainImage { get; set; }

        public Image[] Images { get; set; }
        public bool IsFilesExtensionCorrect()
        {
            var imagesForUpdate = AllImages().Where(s => !string.IsNullOrEmpty(s.Base64ImageString));

            return !imagesForUpdate.Any() ||
                   imagesForUpdate.Any() && imagesForUpdate.All(s => s.IsFileExtensionCorrect());
        }

        public bool IsAllBase64ImagesExist() => true;

        private IEnumerable<Image> AllImages() => new List<Image>(Images) {MainImage};
    }
}