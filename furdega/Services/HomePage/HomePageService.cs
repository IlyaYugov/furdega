using System.Threading.Tasks;
using Furdega.Services.HomePage.Dtos.Output;
using Furdega.Services.HomePage.Sections.About;
using Furdega.Services.HomePage.Sections.CompanyBenefits;
using Furdega.Services.HomePage.Sections.IssueSolutions;
using Furdega.Services.HomePage.Sections.MainHome;
using Furdega.Services.HomePage.Sections.Staff;
using Furdega.Services.HomePage.Sections.WorkExamples;
using Furdega.Services.HomePage.Sections.WorkingProcess;

namespace Furdega.Services.HomePage
{
    public class HomePageService: IHomePageService
    {
        private readonly IAboutSectionService _aboutService;
        private readonly ICompanyBenefitsSectionService _companyBenefitsService;
        private readonly IIssueSolutionsSectionService _issueSolutionsService;
        private readonly IMainHomeSectionService _mainPageService;
        private readonly IWorkExamplesSectionService _workExamplesService;
        private readonly IWorkingProcessSectionService _workingProcessService;
        private readonly IStaffSectionService _staffService;

        public HomePageService(
            IAboutSectionService aboutService,
            ICompanyBenefitsSectionService companyBenefitsService,
            IIssueSolutionsSectionService issueSolutionsService,
            IMainHomeSectionService mainPageService,
            IWorkExamplesSectionService workExamplesService,
            IWorkingProcessSectionService workingProcessService,
            IStaffSectionService staffService)
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

            return new()
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