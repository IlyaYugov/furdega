using System.Threading.Tasks;
using Furdega.Services.HomePage.Dtos.Output;
using Furdega.Services.HomePage.Sections;
using Furdega.Services.HomePage.Sections.About.Dtos.Input;
using Furdega.Services.HomePage.Sections.About.Dtos.Output;
using Furdega.Services.HomePage.Sections.CompanyBenefits.Dtos.Input;
using Furdega.Services.HomePage.Sections.CompanyBenefits.Dtos.Output;
using Furdega.Services.HomePage.Sections.IssueSolutions.Dtos.Input;
using Furdega.Services.HomePage.Sections.IssueSolutions.Dtos.Output;
using Furdega.Services.HomePage.Sections.MainHome.Dtos.Input;
using Furdega.Services.HomePage.Sections.MainHome.Dtos.Output;
using Furdega.Services.HomePage.Sections.Staff.Dtos.Input;
using Furdega.Services.HomePage.Sections.Staff.Dtos.Output;
using Furdega.Services.HomePage.Sections.WorkExamples.Dtos.Input;
using Furdega.Services.HomePage.Sections.WorkExamples.Dtos.Output;
using Furdega.Services.HomePage.Sections.WorkingProcess.Dtos.Input;
using Furdega.Services.HomePage.Sections.WorkingProcess.Dtos.Output;
using Furdega.Services.Staff;
using Furdega.Services.Staff.Dtos.Output;

namespace Furdega.Services.HomePage
{
    public class HomePageService: IHomePageService
    {
        private readonly IHomePageSectionService<AboutSectionRequest, AboutSectionResponse> _aboutService;
        private readonly IHomePageSectionService<CompanyBenefitsSectionRequest, CompanyBenefitsSectionResponse> _companyBenefitsService;
        private readonly IHomePageSectionService<IssueSolutionsSectionRequest, IssueSolutionsSectionResponse> _issueSolutionsService;
        private readonly IHomePageSectionService<MainHomeSectionRequest, MainHomeSectionResponse> _mainPageService;
        private readonly IHomePageSectionService<WorkExamplesSectionRequest, WorkExamplesSectionResponse> _workExamplesService;
        private readonly IHomePageSectionService<WorkingProcessSectionRequest, WorkingProcessSectionResponse> _workingProcessService;
        private readonly IHomePageSectionService<StaffRequest, StaffResponse> _staffService;

        public HomePageService(
            IHomePageSectionService<AboutSectionRequest, AboutSectionResponse> aboutService, 
            IHomePageSectionService<CompanyBenefitsSectionRequest, CompanyBenefitsSectionResponse> companyBenefitsService, 
            IHomePageSectionService<IssueSolutionsSectionRequest, IssueSolutionsSectionResponse> issueSolutionsService, 
            IHomePageSectionService<MainHomeSectionRequest, MainHomeSectionResponse> mainPageService, 
            IHomePageSectionService<WorkExamplesSectionRequest, WorkExamplesSectionResponse> workExamplesService, 
            IHomePageSectionService<WorkingProcessSectionRequest, WorkingProcessSectionResponse> workingProcessService,
            IHomePageSectionService<StaffRequest, StaffResponse> staffService)
        {
            _aboutService = aboutService;
            _companyBenefitsService = companyBenefitsService;
            _issueSolutionsService = issueSolutionsService;
            _mainPageService = mainPageService;
            _workExamplesService = workExamplesService;
            _workingProcessService = workingProcessService;
            _staffService = staffService;
        }

        public async Task<HomePageContent> GetFullPage()
        {

            return new HomePageContent
            {
                AboutSection = await _aboutService.GetSection(),
                CompanyBenefitsSection = await _companyBenefitsService.GetSection(),
                IssueSolutionsSection = await _issueSolutionsService.GetSection(),
                MainHomeSection = await _mainPageService.GetSection(),
                WorkExamplesSection = await _workExamplesService.GetSection(),
                WorkingProcessSection = await _workingProcessService.GetSection(),
                Staff = await _staffService.GetSection()
            };
        }
    }
}