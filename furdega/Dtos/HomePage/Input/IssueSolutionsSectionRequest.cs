using System.Linq;
using Furdega.Dtos.HomePage.Input.Interfaces;
using Furdega.Services.FileManagers;

namespace Furdega.Dtos.HomePage.Input
{
    public class IssueSolutionsSectionRequest : HomeSectionBase, ISectionRequestWithImage
    {
        public IssueSolutionRequest IssueSolution1 { get; set; }
        public IssueSolutionRequest IssueSolution2 { get; set; }
        public IssueSolutionRequest IssueSolution3 { get; set; }
        public IssueSolutionRequest IssueSolution4 { get; set; }

        public bool IsFilesExtensionCorrect()
        {
            var images = AllImages.Where(s => s != null);

            return !images.Any() || images.Any() && images.All(s => s.IsFileExtensionCorrect());
        }

        public bool IsAllBase64ImagesExist() => AllImages.All(s => s != null);

        private Image[] AllImages => new[]
            {
                IssueSolution1?.Image, 
                IssueSolution2?.Image,
                IssueSolution3?.Image, 
                IssueSolution4?.Image
            };
    }
}