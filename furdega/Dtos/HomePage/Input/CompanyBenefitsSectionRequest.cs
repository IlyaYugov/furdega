using System.Linq;
using Furdega.Services.FileManagers;

namespace Furdega.Dtos.HomePage.Input
{
    public class CompanyBenefitsSectionRequest: HomeSectionBase
    {
        public CompanyBenefitRequest[] CompanyBenefits { get; set; }

        public bool IsFilesExtensionCorrect()
        {
            var base64Files = CompanyBenefits?.Where(s => !string.IsNullOrEmpty(s.Image)).Select(s => s.Image).ToList();

            return base64Files == null || !base64Files.Any() || base64Files.Any() && base64Files.All(FileManager.IsFileExtensionCorrect);
        }
    }
}