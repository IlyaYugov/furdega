using System;

namespace Furdega.Dtos.HomePage
{
    public class IssueSolutionsSection : HomeSectionBase
    {
        public IssueSolution[] IssueSolutions { get; set; } = Array.Empty<IssueSolution>();
    }
}