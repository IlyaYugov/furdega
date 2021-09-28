using System;
using System.Collections.Generic;

namespace Furdega.Dtos.HomePage.Output
{
    public class StaffSectionResponse: HomeSectionBase
    {
        public IList<EmployeeResponse> Employees { get; set; } = Array.Empty<EmployeeResponse>();
    }
}