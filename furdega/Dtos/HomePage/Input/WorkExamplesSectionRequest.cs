using System;
using System.Linq;
using Furdega.Dtos.HomePage.Input.Interfaces;
using Furdega.Services.FileManagers;

namespace Furdega.Dtos.HomePage.Input
{
    public class WorkExamplesSectionRequest: HomeSectionBase, ISectionRequestWithImage
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
            WorkExample1.GetAllImages.All(s => s != null) &&
            WorkExample2.GetAllImages.All(s => s != null) &&
            WorkExample3.GetAllImages.All(s => s != null);
    }
}