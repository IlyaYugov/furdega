using System.Linq;
using Furdega.Services.FileManagers;

namespace Furdega.Dtos.HomePage.Input
{
    public class IssueSolutionsSectionRequest : HomeSectionBase
    {
        public IssueSolutionRequest[] IssueSolutions { get; set; }

        public bool IsFilesExtensionCorrect()
        {
            var fileExtensions = IssueSolutions?.Where(s => s.Image != null).Select(s => s.Image.FileName).ToList();

            return fileExtensions != null && fileExtensions.Any() && fileExtensions.All(FileManager.IsFileExtensionCorrect);
        }
    }
}