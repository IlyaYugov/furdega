using System;
using Furdega.DataAccess.Models.Enums;
using Furdega.Dtos.HomePage.Input;
using Furdega.Dtos.HomePage.Output;

namespace Furdega.Extensions
{
    public static class TypeExtensions
    {
        public static HomePageSectionType GetHomePageSectionType(this Type classType)
        {
            if (classType == typeof(MainHomeSectionResponse))
            {
                return HomePageSectionType.MainHomeSection;
            }
            else if (classType == typeof(AboutSectionResponse))
            {
                return HomePageSectionType.AboutSection;
            }
            else if (classType == typeof(CompanyBenefitsSectionResponse))
            {
                return HomePageSectionType.CompanyBenefitsSection;
            }
            else if (classType == typeof(IssueSolutionsSectionResponse))
            {
                return HomePageSectionType.IssueSolutionsSection;
            }
            else if (classType == typeof(StaffSectionResponse))
            {
                return HomePageSectionType.StaffSection;
            }
            else if (classType == typeof(WorkExamplesSectionResponse))
            {
                return HomePageSectionType.WorkExamplesSection;
            }
            else if (classType == typeof(WorkingProcessSectionResponse))
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