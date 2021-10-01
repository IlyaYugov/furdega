using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using AutoMapper;
using Furdega.DataAccess.Models;
using Furdega.DataAccess.Models.Enums;
using Furdega.Dtos.HomePage.Input;
using Furdega.Dtos.HomePage.Output;
using Furdega.Extensions;
using Furdega.Repositories.RepositoryBase;
using Furdega.Services.FileManagers;

namespace Furdega.Services.HomePage
{
    public class HomePageService: IHomePageService
    {
        private readonly IRepositoryBase<HomePageSection> _homePageSectionRepository;

        private readonly IImageManager _fileManager;

        private readonly IMapper _mapper;

        public HomePageService(IRepositoryBase<HomePageSection> homePageSectionRepository, IMapper mapper, IImageManager fileManager)
        {
            _homePageSectionRepository = homePageSectionRepository;
            _mapper = mapper;
            _fileManager = fileManager;
        }

        public async Task<HomePageContent> GetFullPage()
        {
            var sections = await _homePageSectionRepository.GetItems();

            var result = new HomePageContent
            {
                MainHomeSection = GetDeserializedSection<MainHomeSectionResponse>(sections),
                AboutSection = GetDeserializedSection<AboutSectionResponse>(sections),
                CompanyBenefitsSection = GetDeserializedSection<CompanyBenefitsSectionResponse>(sections),
                IssueSolutionsSection = GetDeserializedSection<IssueSolutionsSectionResponse>(sections),
                StaffSection = GetDeserializedSection<StaffSectionResponse>(sections),
                WorkExamplesSection = GetDeserializedSection<WorkExamplesSectionResponse>(sections),
                WorkingProcessSection = GetDeserializedSection<WorkingProcessSectionResponse>(sections)
            };

            return result;
        }

        public async Task CreateSection(HomePageSectionType sectionType, object sectionContent)
        {
            var existingSections = await _homePageSectionRepository.GetItems(s => s.SectionTypeId == (int)sectionType);

            if (existingSections.FirstOrDefault() != null)
                throw new Exception($"Section with type:{sectionType} already exist");

            var section = new HomePageSection
            {
                SectionTypeId = (int) sectionType, 
                SectionContent = JsonSerializer.Serialize(sectionContent)
            };

            await _homePageSectionRepository.Create(section);
        }

        public async Task UpdateSection(HomePageSectionType sectionType, object sectionContent)
        {
            var existingSections = await _homePageSectionRepository.GetItems(s => s.SectionTypeId == (int)sectionType);

            var section = existingSections.FirstOrDefault();

            if (section == null)
                throw new Exception($"Section with type:{sectionType} is not exist");

            section.SectionContent = JsonSerializer.Serialize(sectionContent);

            await _homePageSectionRepository.Create(section);
        }

        public async Task CreateOrUpdateSection(HomePageSectionType sectionType, object sectionContent)
        {
            var existingSections = await _homePageSectionRepository.GetItems(s => s.SectionTypeId == (int)sectionType);

            var section = existingSections.FirstOrDefault()
                          ?? new HomePageSection
                          {
                              SectionTypeId = (int)sectionType
                          };

            section.SectionContent = JsonSerializer.Serialize(sectionContent);

            if (section.Id == 0)
            {
                await _homePageSectionRepository.Create(section);
            }
            else
            {
                await _homePageSectionRepository.Update(section);
            }
        }

        public async Task CreateOrUpdateStaffSection(StaffSectionRequest section)
        {
            var mappedSection = _mapper.Map<StaffSectionResponse>(section); //TODO: check that mappedSection.Employees is empty
            mappedSection.Employees = new List<EmployeeResponse>();

            foreach (var employee in section.Employees)
            {
                var mappedEmployee = _mapper.Map<EmployeeResponse>(employee);
                mappedEmployee.ImageUrl = await _fileManager.LoadImage(employee.Image);
                mappedSection.Employees.Add(mappedEmployee);
            }

            await CreateOrUpdateSection(HomePageSectionType.StaffSection, mappedSection);
        }

        public async Task CreateWorkExamplesSection(WorkExamplesSectionRequest sectionRequest)
        {
            var mappedSection = _mapper.Map<WorkExamplesSectionResponse>(sectionRequest);

            mappedSection.WorkExample1.AfterImage1.ImageUrl = await _fileManager.LoadImage(sectionRequest.WorkExample1.AfterImage1);
            mappedSection.WorkExample1.AfterImage2.ImageUrl = await _fileManager.LoadImage(sectionRequest.WorkExample1.AfterImage2);
            mappedSection.WorkExample1.AfterImage3.ImageUrl = await _fileManager.LoadImage(sectionRequest.WorkExample1.AfterImage3);

            mappedSection.WorkExample2.AfterImage1.ImageUrl = await _fileManager.LoadImage(sectionRequest.WorkExample2.AfterImage1);
            mappedSection.WorkExample2.AfterImage2.ImageUrl = await _fileManager.LoadImage(sectionRequest.WorkExample2.AfterImage2);
            mappedSection.WorkExample2.AfterImage3.ImageUrl = await _fileManager.LoadImage(sectionRequest.WorkExample2.AfterImage3);

            mappedSection.WorkExample3.AfterImage1.ImageUrl = await _fileManager.LoadImage(sectionRequest.WorkExample3.AfterImage1);
            mappedSection.WorkExample3.AfterImage2.ImageUrl = await _fileManager.LoadImage(sectionRequest.WorkExample3.AfterImage2);
            mappedSection.WorkExample3.AfterImage3.ImageUrl = await _fileManager.LoadImage(sectionRequest.WorkExample3.AfterImage3);


            mappedSection.WorkExample1.BeforeImage1.ImageUrl = await _fileManager.LoadImage(sectionRequest.WorkExample1.BeforeImage1);
            mappedSection.WorkExample1.BeforeImage2.ImageUrl = await _fileManager.LoadImage(sectionRequest.WorkExample1.BeforeImage2);
            mappedSection.WorkExample1.BeforeImage3.ImageUrl = await _fileManager.LoadImage(sectionRequest.WorkExample1.BeforeImage3);

            mappedSection.WorkExample2.BeforeImage1.ImageUrl = await _fileManager.LoadImage(sectionRequest.WorkExample2.BeforeImage1);
            mappedSection.WorkExample2.BeforeImage2.ImageUrl = await _fileManager.LoadImage(sectionRequest.WorkExample2.BeforeImage2);
            mappedSection.WorkExample2.BeforeImage3.ImageUrl = await _fileManager.LoadImage(sectionRequest.WorkExample2.BeforeImage3);

            mappedSection.WorkExample3.BeforeImage1.ImageUrl = await _fileManager.LoadImage(sectionRequest.WorkExample3.BeforeImage1);
            mappedSection.WorkExample3.BeforeImage2.ImageUrl = await _fileManager.LoadImage(sectionRequest.WorkExample3.BeforeImage2);
            mappedSection.WorkExample3.BeforeImage3.ImageUrl = await _fileManager.LoadImage(sectionRequest.WorkExample3.BeforeImage3);

            await CreateSection(HomePageSectionType.WorkExamplesSection, mappedSection);
        }

        public async Task UpdateWorkExamplesSection(WorkExamplesSectionRequest sectionRequest)
        {
            var section = (WorkExamplesSectionResponse)await GetSection(HomePageSectionType.WorkExamplesSection);

            _mapper.Map(sectionRequest, section);

            await _fileManager.LoadImage(sectionRequest.WorkExample1.AfterImage1);
            await _fileManager.LoadImage(sectionRequest.WorkExample1.AfterImage2);
            await _fileManager.LoadImage(sectionRequest.WorkExample1.AfterImage3);
            
            await _fileManager.LoadImage(sectionRequest.WorkExample2.AfterImage1);
            await _fileManager.LoadImage(sectionRequest.WorkExample2.AfterImage2);
            await _fileManager.LoadImage(sectionRequest.WorkExample2.AfterImage3);
            
            await _fileManager.LoadImage(sectionRequest.WorkExample3.AfterImage1);
            await _fileManager.LoadImage(sectionRequest.WorkExample3.AfterImage2);
            await _fileManager.LoadImage(sectionRequest.WorkExample3.AfterImage3);


            await _fileManager.LoadImage(sectionRequest.WorkExample1.BeforeImage1);
            await _fileManager.LoadImage(sectionRequest.WorkExample1.BeforeImage2);
            await _fileManager.LoadImage(sectionRequest.WorkExample1.BeforeImage3);

            await _fileManager.LoadImage(sectionRequest.WorkExample2.BeforeImage1);
            await _fileManager.LoadImage(sectionRequest.WorkExample2.BeforeImage2);
            await _fileManager.LoadImage(sectionRequest.WorkExample2.BeforeImage3);

            await _fileManager.LoadImage(sectionRequest.WorkExample3.BeforeImage1);
            await _fileManager.LoadImage(sectionRequest.WorkExample3.BeforeImage2);
            await _fileManager.LoadImage(sectionRequest.WorkExample3.BeforeImage3);

            await UpdateSection(HomePageSectionType.WorkExamplesSection, section);
        }

        public async Task CreateOrUpdateCompanyBenefitsSection(CompanyBenefitsSectionRequest section)
        {
            var mappedSection = _mapper.Map<CompanyBenefitsSectionResponse>(section); //TODO: check that mappedSection.Employees is empty
            mappedSection.CompanyBenefits = new List<CompanyBenefitResponse>();

            foreach (var companyBenefit in section.CompanyBenefits)
            {
                var mappedCompanyBenefit = _mapper.Map<CompanyBenefitResponse>(companyBenefit);
                mappedCompanyBenefit.ImageUrl = await _fileManager.LoadImage(companyBenefit.Image);
                mappedSection.CompanyBenefits.Add(mappedCompanyBenefit);
            }

            await CreateOrUpdateSection(HomePageSectionType.CompanyBenefitsSection, mappedSection);
        }

        public async Task CreateOrUpdateIssueSolutionsSection(IssueSolutionsSectionRequest section)
        {
            var mappedSection = _mapper.Map<IssueSolutionsSectionResponse>(section); //TODO: check that mappedSection.Employees is empty
            mappedSection.IssueSolutions = new List<IssueSolutionResponse>();

            foreach (var issueSolution in section.IssueSolutions)
            {
                var mappedIssueSolution = _mapper.Map<IssueSolutionResponse>(issueSolution);
                if(!string.IsNullOrEmpty(issueSolution.Image)) 
                    mappedIssueSolution.ImageUrl = await _fileManager.LoadImage(issueSolution.Image);
                mappedSection.IssueSolutions.Add(mappedIssueSolution);
            }

            await CreateOrUpdateSection(HomePageSectionType.IssueSolutionsSection, mappedSection);
        }

        public async Task CreateOrUpdateMainHomeSection(MainHomeSectionRequest section)
        {
            var mappedSection = _mapper.Map<MainHomeSectionResponse>(section);

            if (!string.IsNullOrEmpty(section.Image))
                mappedSection.ImageUrl = await _fileManager.LoadImage(section.Image);

            await CreateOrUpdateSection(HomePageSectionType.MainHomeSection, mappedSection);
        }

        //public for reflection in method GetSection
        public TSection GetDeserializedSection<TSection>(List<HomePageSection> sections) where TSection : class
        {
            var sectionType = typeof(TSection).GetHomePageSectionType();

            var sectionContent = sections.FirstOrDefault(s => s.SectionTypeId == (int)sectionType)?.SectionContent ?? "{}";

            return JsonSerializer.Deserialize<TSection>(sectionContent);
        }
    }
}