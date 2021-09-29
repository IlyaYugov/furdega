using System;
using Furdega.DataAccess.Models.Enums;
using Furdega.Dtos.HomePage.Output;

namespace Furdega.Extensions
{
    public static class SectionTypeExtensions
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

        public static Type GetHomePageSectionClassType(this HomePageSectionType sectionType)
        {
            switch (sectionType)
            {
                case HomePageSectionType.MainHomeSection:
                    return typeof(MainHomeSectionResponse);

                case HomePageSectionType.AboutSection:
                    return typeof(AboutSectionResponse);

                case HomePageSectionType.CompanyBenefitsSection:
                    return typeof(CompanyBenefitsSectionResponse);

                case HomePageSectionType.IssueSolutionsSection:
                    return typeof(IssueSolutionsSectionResponse);

                case HomePageSectionType.StaffSection:
                    return typeof(StaffSectionResponse);

                case HomePageSectionType.WorkExamplesSection:
                    return typeof(WorkExamplesSectionResponse);

                case HomePageSectionType.WorkingProcessSection:
                    return typeof(WorkingProcessSectionResponse);

            }

            return null;
        }
    }
}