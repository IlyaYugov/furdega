using System;
using Furdega.DataAccess.Models.Enums;
using Furdega.Dtos.HomePage;
using Furdega.Dtos.HomePage.Input;

namespace Furdega.Extensions
{
    public static class TypeExtensions
    {
        public static HomePageSectionType GetHomePageSectionType(this Type classType)
        {
            if (classType == typeof(MainHomeSectionRequest))
            {
                return HomePageSectionType.MainHomeSection;
            }
            else if (classType == typeof(AboutSectionRequest))
            {
                return HomePageSectionType.AboutSection;
            }
            else if (classType == typeof(CompanyBenefitsSectionRequest))
            {
                return HomePageSectionType.CompanyBenefitsSection;
            }
            else if (classType == typeof(IssueSolutionsSectionRequest))
            {
                return HomePageSectionType.IssueSolutionsSection;
            }
            else if (classType == typeof(StaffSectionRequest))
            {
                return HomePageSectionType.StaffSection;
            }
            else if (classType == typeof(WorkExamplesSectionRequest))
            {
                return HomePageSectionType.WorkExamplesSection;
            }
            else if (classType == typeof(WorkingProcessSectionRequest))
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