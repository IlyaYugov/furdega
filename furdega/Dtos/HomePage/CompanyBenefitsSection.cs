﻿using System;

namespace Furdega.Dtos.HomePage
{
    public class CompanyBenefitsSection: HomeSectionBase
    {
        public CompanyBenefit[] CompanyBenefits { get; set; } = Array.Empty<CompanyBenefit>();
    }
}