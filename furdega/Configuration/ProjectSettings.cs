using System.IO;
namespace Furdega.Configuration
{
    public class ProjectSettings
    {
        public static string RootPath { get; set; }

        public string ImagesDirectoryName { get; set; }

        public string GetImageDirectoryPath => Path.Combine(RootPath, ImagesDirectoryName);
    }
}