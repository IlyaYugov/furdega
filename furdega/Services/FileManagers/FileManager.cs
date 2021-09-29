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
        private static readonly string[] AvailableFileExtensions = { ".jpeg", "jpg", ".png" };

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

        public static bool IsFileExtensionCorrect(string fullFileName) => AvailableFileExtensions.Any(ex => Path.GetExtension(fullFileName).Equals(ex, StringComparison.OrdinalIgnoreCase));

        private string GenerateFileName(IFormFile file) => string.Concat(Guid.NewGuid().ToString(), Path.GetExtension(file.FileName));

        private async Task LoadFileAsync(IFormFile file, string fileName)
        {
            var filePath = Path.Combine(_projectSettings.GetImageDirectoryPath, fileName);

            await using var fileStream = new FileStream(filePath, FileMode.Create);
            await file.CopyToAsync(fileStream);
        }
    }
}