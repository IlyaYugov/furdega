using System.IO;
namespace Furdega.Configuration
{
    public class ProjectSettings
    {
        public static readonly string ParentDirectoryPath = Directory.GetParent(Directory.GetCurrentDirectory())?.FullName;

        public string ImagesDirectoryName { get; set; }

        public string GetImageDirectoryPath => Path.Combine(ParentDirectoryPath, ImagesDirectoryName);
    }
}