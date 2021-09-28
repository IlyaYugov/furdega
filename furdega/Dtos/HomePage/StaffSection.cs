using System;

namespace Furdega.Dtos.HomePage
{
    public class StaffSection: HomeSectionBase
    {
        public Employee[] Employees { get; set; } = Array.Empty<Employee>();
    }
}