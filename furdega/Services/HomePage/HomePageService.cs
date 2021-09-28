using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Furdega.DataAccess.Models;
using Furdega.DataAccess.Models.Enums;
using Furdega.Dtos.HomePage;
using Furdega.Repositories.RepositoryBase;

namespace Furdega.Services.HomePage
{
    public class HomePageService: IHomePageService
    {
        private readonly IRepositoryBase<HomePageSection> _homePageSectionRepository;

        public HomePageService(IRepositoryBase<HomePageSection> homePageSectionRepository)
        {
            _homePageSectionRepository = homePageSectionRepository;
        }

        public async Task<HomePageContent> GetFullPage()
        {
            var sections = await _homePageSectionRepository.GetItems();

            var result = new HomePageContent
            {
                MainHomeSection = GetDeserializedSection<MainHomeSection>(sections),
                AboutSection = GetDeserializedSection<AboutSection>(sections),
                CompanyBenefitsSection = GetDeserializedSection<CompanyBenefitsSection>(sections),
                IssueSolutionsSection = GetDeserializedSection<IssueSolutionsSection>(sections),
                StaffSection = GetDeserializedSection<StaffSection>(sections),
                WorkExamplesSection = GetDeserializedSection<WorkExamplesSection>(sections),
                WorkingProcessSection = GetDeserializedSection<WorkingProcessSection>(sections)
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

        private TSection GetDeserializedSection<TSection>(List<HomePageSection> sections) where TSection: class
        {
            var sectionType = GetHomePageSectionTypeByClassType(typeof(TSection));

            var sectionContent = sections.FirstOrDefault(s => s.SectionTypeId == (int)sectionType)?.SectionContent ?? "{}";

            return JsonSerializer.Deserialize<TSection>(sectionContent);
        }

        private HomePageSectionType GetHomePageSectionTypeByClassType(Type classType)
        {
            if (classType == typeof(MainHomeSection))
            {
                return HomePageSectionType.MainHomeSection;
            }
            else if (classType == typeof(AboutSection))
            {
                return HomePageSectionType.AboutSection;
            }
            else if (classType == typeof(CompanyBenefitsSection))
            {
                return HomePageSectionType.CompanyBenefitsSection;
            }
            else if (classType == typeof(IssueSolutionsSection))
            {
                return HomePageSectionType.IssueSolutionsSection;
            }
            else if (classType == typeof(StaffSection))
            {
                return HomePageSectionType.StaffSection;
            }
            else if (classType == typeof(WorkExamplesSection))
            {
                return HomePageSectionType.WorkExamplesSection;
            }
            else if (classType == typeof(WorkingProcessSection))
            {
                return HomePageSectionType.WorkingProcessSection;
            }
            else
            {
                return HomePageSectionType.None;
            }
        }
    }
}