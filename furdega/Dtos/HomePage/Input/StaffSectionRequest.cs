using System.Linq;
using Furdega.Services.FileManagers;

namespace Furdega.Dtos.HomePage.Input
{
    public class StaffSectionRequest : HomeSectionBase
    {
        public EmployeeRequest[] Employees { get; set; }

        public bool IsFilesExtensionCorrect()
        {
            var fileNames = Employees?.Where(s => s.Image != null).Select(s => s.Image.FileName).ToList();

            return fileNames != null && fileNames.Any() && fileNames.All(FileManager.IsFileExtensionCorrect);
        }
    }
}