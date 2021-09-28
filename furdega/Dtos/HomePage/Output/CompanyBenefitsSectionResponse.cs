using System;
using System.Collections.Generic;

namespace Furdega.Dtos.HomePage.Output
{
    public class CompanyBenefitsSectionResponse: HomeSectionBase
    {
        public IList<CompanyBenefitResponse> CompanyBenefits { get; set; } = Array.Empty<CompanyBenefitResponse>();
    }
}