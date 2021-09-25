using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Furdega.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        [HttpGet]
        public async Task<IEnumerable<HomePageContent>> GetTypes()
        {
            return Array.Empty<HomePageContent>();
        }

        [HttpPost]
        public async Task<int> CreateOrUpdateAboutSection(AboutSection section)
        {
            return 0;
        }

        [HttpPost]
        public async Task<int> CreateOrUpdateWorkExamplesSection(WorkExamplesSection section)
        {
            return 0;
        }

        [HttpPost]
        public async Task<int> CreateOrUpdateCompanyBenefitsSection(CompanyBenefitsSection section)
        {
            return 0;
        }

        [HttpPost]
        public async Task<int> CreateOrUpdateIssueSolutionsSection(IssueSolutionsSection section)
        {
            return 0;
        }

        [HttpPost]
        public async Task<int> CreateOrUpdateWorkingProcessSection(WorkingProcessSection section)
        {
            return 0;
        }

        [HttpPost]
        public async Task<int> CreateOrUpdateStaffSection(StaffSection section)
        {
            return 0;
        }
    }

    public class HomePageContent
    {
        public string Header { get; set; }
        public string ImageUrl { get; set; }

        public AboutSection AboutSection { get; set; }
        public WorkExamplesSection WorkExamplesSection { get; set; }
        public CompanyBenefitsSection CompanyBenefitsSection { get; set; }
        public IssueSolutionsSection IssueSolutionsSection { get; set; }
        public WorkingProcessSection WorkingProcessSection { get; set; }
        public StaffSection StaffSection { get; set; }
    }

    public class StaffSection: HomeSectionBase
    {
        public Employee[] Employees { get; set; }
    }

    public class Employee
    {
        public string Title { get; set; }
        public string ImageUrl { get; set; }
        public string Description { get; set; }
    }

    public class WorkingProcessSection: HomeSectionBase
    {
        public string FirstStage { get; set; }
        public string SecondStage { get; set; }
        public string ThirdStage { get; set; }
        public string FinalStage { get; set; }
    }

    public class IssueSolutionsSection : HomeSectionBase
    {
        public IssueSolution[] IssueSolutions { get; set; }
    }

    public class IssueSolution
    {
        public string Title { get; set; }
        public string ImageUrl { get; set; }
        public string Description { get; set; }
    }

    public class CompanyBenefitsSection: HomeSectionBase
    {
        public CompanyBenefit CompanyBenefits { get; set; }
    }

    public class CompanyBenefit
    {
        public string Title { get; set; }
        public string ImageUrl { get; set; }
        public string Description { get; set; }
    }

    public class WorkExamplesSection: HomeSectionBase
    {
        public WorkExample[] WorkExamples { get; set; }
    }

    public class WorkExample
    {
        public string Title { get; set; }

        public string FurnitureType { get; set; }
        public string Duration { get; set; }
        public string WorkType { get; set; }

        public string Description { get; set; }

        public string[] ImageBeforeUrls { get; set; }
        public string[] ImageAfterUrls { get; set; }
    }

    public class AboutSection: HomeSectionBase
    {
        public string Text { get; set; }
    }

    public abstract class HomeSectionBase
    {
        public string Header { get; set; }
    }
}
