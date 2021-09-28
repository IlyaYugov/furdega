using System;
using System.Collections.Generic;

namespace Furdega.Dtos.HomePage.Output
{
    public class IssueSolutionsSectionResponse : HomeSectionBase
    {
        public IList<IssueSolutionResponse> IssueSolutions { get; set; } = Array.Empty<IssueSolutionResponse>();
    }
}