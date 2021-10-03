using System;
using System.Linq;
using Furdega.Services.FileManagers;

namespace Furdega.Services.HomePage.Sections.WorkExamples.Dtos.Input
{
    public class WorkExamplesSectionRequest: HomeSectionModelBase, IRequestWithImage
    {
        public WorkExampleRequest WorkExample1 { get; set; }
        public WorkExampleRequest WorkExample2 { get; set; }
        public WorkExampleRequest WorkExample3 { get; set; }

        public bool IsFilesExtensionCorrect()
        {
            var images =
                WorkExample1?.GetAllImages.Where(s=> s != null) ?? Array.Empty<Image>()
                    .Union(WorkExample2?.GetAllImages.Where(s => s != null) ?? Array.Empty<Image>())
                    .Union(WorkExample3?.GetAllImages.Where(s => s != null) ?? Array.Empty<Image>());

            return !images.Any() || images.Any() && images.All(s=> s.IsFileExtensionCorrect());
        }

        public bool IsAllBase64ImagesExist() =>
            WorkExample1.GetAllImages.All(s => !string.IsNullOrEmpty(s?.Base64ImageString)) &&
            WorkExample2.GetAllImages.All(s => !string.IsNullOrEmpty(s?.Base64ImageString)) &&
            WorkExample3.GetAllImages.All(s => !string.IsNullOrEmpty(s?.Base64ImageString));
    }
}