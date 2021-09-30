using System.Linq;
using Furdega.Services.FileManagers;

namespace Furdega.Dtos.HomePage.Input
{
    public class StaffSectionRequest : HomeSectionBase
    {
        public EmployeeRequest[] Employees { get; set; }

        public bool IsFilesExtensionCorrect()
        {
            var base64Files = Employees?.Where(s => !string.IsNullOrEmpty(s.Image)).Select(s => s.Image).ToList();

            return base64Files == null || !base64Files.Any() || base64Files.Any() && base64Files.All(FileManager.IsFileExtensionCorrect);
        }
    }
}