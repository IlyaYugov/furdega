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

        private readonly IFileManager _fileManager;

        private readonly IMapper _mapper;

        public HomePageService(IRepositoryBase<HomePageSection> homePageSectionRepository, IMapper mapper, IFileManager fileManager)
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
                mappedEmployee.ImageUrl = await _fileManager.LoadFile(employee.Image);
                mappedSection.Employees.Add(mappedEmployee);
            }

            await CreateOrUpdateSection(HomePageSectionType.StaffSection, mappedSection);
        }

        public async Task CreateOrUpdateWorkExamplesSection(WorkExamplesSectionRequest section)
        {
            var mappedSection = _mapper.Map<WorkExamplesSectionResponse>(section); //TODO: check that mappedSection.WorkExamples is empty
            mappedSection.WorkExamples = new List<WorkExampleResponse>();

            foreach (var workExample in section.WorkExamples)
            {
                var mappedWorkExample = _mapper.Map<WorkExampleResponse>(workExample);
                mappedWorkExample.AfterImageUrls = new List<string>(); //TODO: check that mappedSection.WorkExamples is empty
                mappedWorkExample.BeforeImageUrls = new List<string>(); //TODO: check that mappedSection.WorkExamples is empty

                foreach (var afterImage in workExample.AfterImages)
                {
                    mappedWorkExample.AfterImageUrls.Add(await _fileManager.LoadFile(afterImage));

                }
                foreach (var beforeImage in workExample.BeforeImages)
                {
                    mappedWorkExample.BeforeImageUrls.Add(await _fileManager.LoadFile(beforeImage));
                }

                mappedSection.WorkExamples.Add(mappedWorkExample);
            }

            await CreateOrUpdateSection(HomePageSectionType.WorkExamplesSection, mappedSection);
        }

        public async Task CreateOrUpdateCompanyBenefitsSection(CompanyBenefitsSectionRequest section)
        {
            var mappedSection = _mapper.Map<CompanyBenefitsSectionResponse>(section); //TODO: check that mappedSection.Employees is empty
            mappedSection.CompanyBenefits = new List<CompanyBenefitResponse>();

            foreach (var companyBenefit in section.CompanyBenefits)
            {
                var mappedCompanyBenefit = _mapper.Map<CompanyBenefitResponse>(companyBenefit);
                mappedCompanyBenefit.ImageUrl = await _fileManager.LoadFile(companyBenefit.Image);
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
                mappedIssueSolution.ImageUrl = await _fileManager.LoadFile(issueSolution.Image);
                mappedSection.IssueSolutions.Add(mappedIssueSolution);
            }

            await CreateOrUpdateSection(HomePageSectionType.IssueSolutionsSection, mappedSection);
        }

        public async Task CreateOrUpdateMainHomeSection(MainHomeSectionRequest section)
        {
            var mappedSection = _mapper.Map<MainHomeSectionResponse>(section);

            mappedSection.ImageUrl = await _fileManager.LoadFile(section.Image);

            await CreateOrUpdateSection(HomePageSectionType.MainHomeSection, mappedSection);
        }

        private TSection GetDeserializedSection<TSection>(List<HomePageSection> sections) where TSection : class
        {
            var sectionType = typeof(TSection).GetHomePageSectionType();

            var sectionContent = sections.FirstOrDefault(s => s.SectionTypeId == (int)sectionType)?.SectionContent ?? "{}";

            return JsonSerializer.Deserialize<TSection>(sectionContent);
        }
    }
}