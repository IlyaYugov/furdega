using Furdega.Services.FileManagers;

namespace Furdega.Services.HomePage.Sections.CompanyBenefits.Dtos.Input
{
    public class CompanyBenefitRequest
    {
        public string Title { get; set; }
        public Image Image { get; set; }
        public string Description { get; set; }
    }
}