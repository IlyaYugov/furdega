using System.Linq;
using Furdega.Services.FileManagers;

namespace Furdega.Dtos.HomePage.Input
{
    public class CompanyBenefitsSectionRequest: HomeSectionBase
    {
        public CompanyBenefitRequest[] CompanyBenefits { get; set; }

        public bool IsFilesExtensionCorrect()
        {
            var fileExtensions = CompanyBenefits?.Where(s => s.Image != null).Select(s => s.Image.FileName).ToList();

            return fileExtensions != null && fileExtensions.Any() && fileExtensions.All(FileManager.IsFileExtensionCorrect);
        }
    }
}