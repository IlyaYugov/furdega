using Furdega.Services.FileManagers;

namespace Furdega.Dtos.HomePage.Input
{
    public class CompanyBenefitRequest
    {
        public string Title { get; set; }
        public Image Image { get; set; }
        public string Description { get; set; }
    }
}