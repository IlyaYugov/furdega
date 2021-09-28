using System;

namespace Furdega.Dtos.HomePage
{
    public class WorkExamplesSection: HomeSectionBase
    {
        public WorkExample[] WorkExamples { get; set; } = Array.Empty<WorkExample>();
    }
}