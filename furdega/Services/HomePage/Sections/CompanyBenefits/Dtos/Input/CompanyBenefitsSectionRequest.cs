using System.Linq;
using Furdega.Services.FileManagers;

namespace Furdega.Services.HomePage.Sections.CompanyBenefits.Dtos.Input
{
    public class CompanyBenefitsSectionRequest: HomeSectionModelBase, IRequestWithImage
    {
        public CompanyBenefitRequest CompanyBenefit1 { get; set; }
        public CompanyBenefitRequest CompanyBenefit2 { get; set; }
        public CompanyBenefitRequest CompanyBenefit3 { get; set; }
        public CompanyBenefitRequest CompanyBenefit4 { get; set; }

        public bool IsFilesExtensionCorrect()
        {
            var images = AllImages.Where(s => !string.IsNullOrEmpty(s?.Base64ImageString));

            return !images.Any() || images.Any() && images.All(s => s.IsFileExtensionCorrect());
        }

        public bool IsAllBase64ImagesExist() => AllImages.All(s => !string.IsNullOrEmpty(s?.Base64ImageString));

        private Image[] AllImages => new[]
        {
            CompanyBenefit1.Image,
            CompanyBenefit2.Image,
            CompanyBenefit3.Image,
            CompanyBenefit4.Image
        };
    }
}