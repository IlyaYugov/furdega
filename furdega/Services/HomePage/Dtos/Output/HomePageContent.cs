using Furdega.Services.HomePage.Sections.About.Dtos.Output;
using Furdega.Services.HomePage.Sections.CompanyBenefits.Dtos.Output;
using Furdega.Services.HomePage.Sections.IssueSolutions.Dtos.Output;
using Furdega.Services.HomePage.Sections.MainHome.Dtos.Output;
using Furdega.Services.HomePage.Sections.Staff.Dtos.Output;
using Furdega.Services.HomePage.Sections.WorkExamples.Dtos.Output;
using Furdega.Services.HomePage.Sections.WorkingProcess.Dtos.Output;

namespace Furdega.Services.HomePage.Dtos.Output
{
    public class HomePageContent
    {
        public MainHomeSectionResponse MainHomeSection { get; set; }
        public AboutSectionResponse AboutSection { get; set; }
        public WorkExamplesSectionResponse WorkExamplesSection { get; set; }
        public CompanyBenefitsSectionResponse CompanyBenefitsSection { get; set; }
        public IssueSolutionsSectionResponse IssueSolutionsSection { get; set; }
        public WorkingProcessSectionResponse WorkingProcessSection { get; set; }
        public StaffResponse Staff { get; set; }
    }
}