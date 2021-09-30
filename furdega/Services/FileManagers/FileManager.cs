using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Furdega.Configuration;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;

namespace Furdega.Services.FileManagers
{
    public class FileManager: IFileManager
    {
        public const string FileExtensionError = "Not Support file extension";
        private static readonly string[] AvailableFileExtensions = {".jpg", ".png", ".gif", ".mp4" };

        private readonly ProjectSettings _projectSettings;

        public FileManager(IOptions<ProjectSettings> projectSettings)
        {
            _projectSettings = projectSettings.Value;
        }

        public async Task<string> LoadFile(string base64Image)
        {
            if (base64Image == null)
            {
                return null;
            }

            var fileName = Guid.NewGuid().ToString();
            var fileUrl = Path.Combine("/", _projectSettings.ImagesDirectoryName, string.Concat(fileName, GetFileExtensionFromBase64String(base64Image)));
            await LoadFileAsync(base64Image, fileUrl);

            return fileUrl;
        }

        private async Task LoadFileAsync(string base64Image, string fileUrl)
        {
            var filePath = Path.Combine(_projectSettings.GetImageDirectoryPath, fileUrl);

            await using var fileStream = new FileStream(filePath, FileMode.Create);
            await fileStream.WriteAsync(Convert.FromBase64String(base64Image));
        }

        public static bool IsFileExtensionCorrect(string base64Image) 
            => AvailableFileExtensions.Any(ex => GetFileExtensionFromBase64String(base64Image).Equals(ex, StringComparison.OrdinalIgnoreCase));

        private static string GetFileExtensionFromBase64String(string base64Image)
        {
            var extensionCode = base64Image.Substring(0, 5).ToUpper();

            switch (extensionCode)
            {
                case "IVBOR":
                    return ".png";
                case "/9J/4":
                    return ".jpg";
                case "R0lGO":
                    return ".gif";
                case "AAAAF":
                    return ".mp4";
                default:
                    return string.Empty;
            }
        }
    }
}