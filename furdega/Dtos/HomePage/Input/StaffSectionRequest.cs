namespace Furdega.Dtos.HomePage.Input
{
    public class StaffSectionRequest: HomeSectionBase
    {
        public EmployeeRequest[] Employees { get; set; }
    }
}