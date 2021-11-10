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

        public async Task<ImageResponse> UpdateImage(Image image, string oldImageUrl)
        {
            if (image?.Base64ImageString == null)
            {
                return null;
            }

            RemoveOldImage(oldImageUrl);
            return await CreateImage(image);
        }

        public async Task<ImageResponse> CreateImage(Image image)
        {
            if (image?.Base64ImageString == null)
            {
                return null;
            }

            var imageUrl = Path.Combine("/", _projectSettings.ImagesDirectoryName, image.GetImageName);

            await LoadFileAsync(image.Base64ImageString, imageUrl);

            return new ImageResponse
            {
                Id = Guid.NewGuid(),
                ImageUrl = imageUrl
            };
        }

        private async Task LoadFileAsync(string base64Image, string imageUrl)
        {
            var filePath = string.Concat(ProjectSettings.ParentDirectoryPath, imageUrl);

            await using var fileStream = new FileStream(filePath, FileMode.Create);
            await fileStream.WriteAsync(Convert.FromBase64String(base64Image));
        }

        private void RemoveOldImage(string imageUrl)
        {
            if(string.IsNullOrEmpty(imageUrl))
                return;

            var filePath = string.Concat(ProjectSettings.ParentDirectoryPath, imageUrl);

            File.Delete(filePath);
        }
    }
}