using Furdega.Services.FileManagers;

namespace Furdega.Services.HomePage.Sections.CompanyBenefits.Dtos.Output
{
    public class CompanyBenefitResponse
    {
        public string Title { get; set; }
        public ImageResponse Image { get; set; }
        public string Description { get; set; }
    }
}