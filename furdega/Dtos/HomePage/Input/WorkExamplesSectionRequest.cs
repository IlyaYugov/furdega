using System.Linq;
using Furdega.Services.FileManagers;

namespace Furdega.Dtos.HomePage.Input
{
    public class WorkExamplesSectionRequest: HomeSectionBase
    {
        public WorkExampleRequest[] WorkExamples { get; set; }

        public bool IsFilesExtensionCorrect()
        {
            var fileExtensions =
                WorkExamples?.Where(s => s.AfterImages != null).SelectMany(s => s.AfterImages)
                    .Union(WorkExamples?.Where(s => s.BeforeImages != null).SelectMany(s => s.BeforeImages))
                    .Select(s => s.FileName)
                    .ToList();

            return fileExtensions != null && fileExtensions.Any() && fileExtensions.All(FileManager.IsFileExtensionCorrect);
        }
    }
}