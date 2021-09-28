using System;
using System.Collections.Generic;

namespace Furdega.Dtos.HomePage.Output
{
    public class WorkExamplesSectionResponse: HomeSectionBase
    {
        public IList<WorkExampleResponse> WorkExamples { get; set; } = Array.Empty<WorkExampleResponse>();
    }
}