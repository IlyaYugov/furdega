using System.Linq;
using Furdega.Services.FileManagers;

namespace Furdega.Dtos.HomePage.Input
{
    public class WorkExamplesSectionRequest: HomeSectionBase
    {
        public WorkExampleRequest[] WorkExamples { get; set; }

        public bool IsFilesExtensionCorrect()
        {
            var base64Files =
                WorkExamples?.Where(s => s.AfterImages != null).SelectMany(s => s.AfterImages)
                    .Union(WorkExamples?.Where(s => s.BeforeImages != null).SelectMany(s => s.BeforeImages))
                    .ToList();

            return base64Files != null && base64Files.Any() && base64Files.All(FileManager.IsFileExtensionCorrect);
        }
    }
}