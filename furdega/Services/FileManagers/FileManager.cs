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
        private static readonly string[] AvailableFileExtensions = { "jpeg", "jpg", "png" };

        private readonly ProjectSettings _projectSettings;

        public FileManager(IOptions<ProjectSettings> projectSettings)
        {
            _projectSettings = projectSettings.Value;
        }

        public async Task<string> LoadFile(IFormFile file)
        {
            if (file == null)
            {
                return null;
            }

            var fileName = GenerateFileName(file);
            var fileUrl = Path.Combine("/", _projectSettings.ImagesDirectoryName, fileName);
            await LoadFileAsync(file, fileName);

            return fileUrl;
        }

        public async Task<string> LoadFile(string base64Image)
        {
            if (base64Image == null)
            {
                return null;
            }

            var fileName = Guid.NewGuid().ToString();
            var fileUrl = Path.Combine("/", _projectSettings.ImagesDirectoryName, fileName);
            await LoadFileAsync(base64Image, fileName);

            return fileUrl;
        }

        private async Task LoadFileAsync(string base64Image, string fileName)
        {
            var filePath = Path.Combine(_projectSettings.GetImageDirectoryPath, fileName, GetFileExtensionFromBase64String(base64Image));

            await using var fileStream = new FileStream(filePath, FileMode.Create);
            await fileStream.WriteAsync(Convert.FromBase64String(base64Image));
        }

        public static bool IsFileExtensionCorrect(string base64Image) 
            => AvailableFileExtensions.Any(ex => GetFileExtensionFromBase64String(base64Image).Equals(ex, StringComparison.OrdinalIgnoreCase));

        private string GenerateFileName(IFormFile file) => string.Concat(Guid.NewGuid().ToString(), Path.GetExtension(file.FileName));

        private async Task LoadFileAsync(IFormFile file, string fileName)
        {
            var filePath = Path.Combine(_projectSettings.GetImageDirectoryPath, fileName);

            await using var fileStream = new FileStream(filePath, FileMode.Create);
            await file.CopyToAsync(fileStream);
        }

        private static string GetFileExtensionFromBase64String(string base64Image)
        {
            var extensionCode = base64Image.Substring(0, 5).ToUpper();

            switch (extensionCode)
            {
                case "IVBOR":
                    return "png";
                case "/9J/4":
                    return "jpg";
                case "AAAAF":
                    return "mp4";
                case "JVBER":
                    return "pdf";
                case "AAABA":
                    return "ico";
                case "UMFYI":
                    return "rar";
                case "E1XYD":
                    return "rtf";
                case "U1PKC":
                    return "txt";
                case "MQOWM":
                case "77U/M":
                    return "srt";
                default:
                    return string.Empty;
            }
        }

        //private static string GetFileExtensionFromBase64String(string base64Image)
        //{
        //    var startIndex = base64Image.IndexOf('/') + 1;
        //    var finishIndex = base64Image.IndexOf(';');

        //    return base64Image.Substring(startIndex, finishIndex - startIndex);
        //}
    }
}