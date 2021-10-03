using AutoMapper;
using Furdega.Services.FileManagers;
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
using Furdega.Services.Staff.Dtos.Input;
using Furdega.Services.Staff.Dtos.Output;

namespace Furdega.Services.HomePage.Mapping
{
    public class HomePageProfile : Profile
    {
        public HomePageProfile()
        {
            CreateMap<AboutSectionRequest, AboutSectionResponse>();
            CreateMap<CompanyBenefitRequest, CompanyBenefitResponse>();
            CreateMap<CompanyBenefitsSectionRequest, CompanyBenefitsSectionResponse>();
            CreateMap<EmployeeRequest, EmployeeResponse>();
            CreateMap<IssueSolutionRequest, IssueSolutionResponse>();
            CreateMap<IssueSolutionsSectionRequest, IssueSolutionsSectionResponse>();
            CreateMap<MainHomeSectionRequest, MainHomeSectionResponse>();
            CreateMap<StaffRequest, StaffResponse>();
            CreateMap<WorkExampleRequest, WorkExampleResponse>();
            CreateMap<WorkExamplesSectionRequest, WorkExamplesSectionResponse>();
            CreateMap<WorkingProcessSectionRequest, WorkingProcessSectionResponse>();
            CreateMap<Image, ImageResponse>();
        }
    }
}