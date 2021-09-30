using System.IO;
namespace Furdega.Configuration
{
    public class ProjectSettings
    {
        private static string RootPath = Directory.GetCurrentDirectory();

        public string ImagesDirectoryName { get; set; }

        public string GetImageDirectoryPath => Path.Combine(RootPath, ImagesDirectoryName);
    }
}