using System;
using System.IO;
using System.Threading.Tasks;
using Furdega.Configuration;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;

namespace Furdega.Services.FileManagers
{
    public class FileManager: IFileManager
    {
        private readonly string ImagesDirectoryName;

        public FileManager(IOptions<ProjectSettings> projectSettings)
        {
            ImagesDirectoryName = projectSettings.Value.ImagesDirectoryName;
        }

        public async Task<string> LoadFile(IFormFile file)
        {
            if (file == null)
            {
                return null;
            }

            var fileName = GenerateFileName(file);
            var fileUrl = Path.Combine("/", ImagesDirectoryName, fileName);
            await LoadFileAsync(file, fileName);

            return fileUrl;
        }

        private string GenerateFileName(IFormFile file) => string.Concat(Guid.NewGuid().ToString(), Path.GetExtension(file.FileName));

        private async Task LoadFileAsync(IFormFile file, string fileName)
        {
            var directoryPath = Path.Combine(Directory.GetCurrentDirectory(), ImagesDirectoryName);

            if (!Directory.Exists(directoryPath))
            {
                Directory.CreateDirectory(directoryPath);
            }

            var filePath = Path.Combine(directoryPath, fileName);

            await using var fileStream = new FileStream(filePath, FileMode.Create);
            await file.CopyToAsync(fileStream);
        }
    }
}