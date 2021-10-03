using System;
using System.Collections.Generic;
using Furdega.Services.Staff.Dtos.Output;

namespace Furdega.Services.HomePage.Sections.Staff.Dtos.Output
{
    public class StaffResponse: HomeSectionModelBase
    {
        public IList<EmployeeResponse> Employees { get; set; } = Array.Empty<EmployeeResponse>();
    }
}