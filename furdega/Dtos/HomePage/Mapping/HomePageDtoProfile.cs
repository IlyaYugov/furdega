using AutoMapper;
using Furdega.Dtos.HomePage.Input;
using Furdega.Dtos.HomePage.Output;
using Furdega.Services.FileManagers;

namespace Furdega.Dtos.HomePage.Mapping
{
    public class HomePageDtoProfile : Profile
    {
        public HomePageDtoProfile()
        {
            CreateMap<AboutSectionRequest, AboutSectionResponse>();
            CreateMap<CompanyBenefitRequest, CompanyBenefitResponse>();
            CreateMap<CompanyBenefitsSectionRequest, CompanyBenefitsSectionResponse>();
            CreateMap<EmployeeRequest, EmployeeResponse>();
            CreateMap<IssueSolutionRequest, IssueSolutionResponse>();
            CreateMap<IssueSolutionsSectionRequest, IssueSolutionsSectionResponse>();
            CreateMap<MainHomeSectionRequest, MainHomeSectionResponse>();
            CreateMap<StaffSectionRequest, StaffSectionResponse>();
            CreateMap<WorkExampleRequest, WorkExampleResponse>();
            CreateMap<WorkExamplesSectionRequest, WorkExamplesSectionResponse>();
            CreateMap<WorkingProcessSectionRequest, WorkingProcessSectionResponse>();
            CreateMap<Image, ImageResponse>();
        }
    }
}