using System;
using System.IO;
using System.Threading.Tasks;
using Furdega.Configuration;
using Microsoft.Extensions.Options;

namespace Furdega.Services.FileManagers
{
    public class ImageManager: IImageManager
    {
        private readonly ProjectSettings _projectSettings;

        public ImageManager(IOptions<ProjectSettings> projectSettings)
        {
            _projectSettings = projectSettings.Value;
        }

        public async Task<ImageResponse> LoadImage(Image image)
        {
            if (image.Base64ImageString == null)
            {
                return null;
            }

            var fileUrl = Path.Combine("/", _projectSettings.ImagesDirectoryName, image.GetImageName);
            await LoadFileAsync(image.Base64ImageString, fileUrl);

            return new ImageResponse
            {
                Id = image.Id,
                ImageUrl = fileUrl
            };
        }

        private async Task LoadFileAsync(string base64Image, string fileUrl)
        {
            var filePath = string.Concat(ProjectSettings.ParentDirectoryPath, fileUrl);

            await using var fileStream = new FileStream(filePath, FileMode.Create);
            await fileStream.WriteAsync(Convert.FromBase64String(base64Image));
        }
    }
}