using System;
using System.Linq;
using Furdega.Services.FileManagers;
using Furdega.Services.Staff.Dtos.Input;

namespace Furdega.Services.HomePage.Sections.Staff.Dtos.Input
{
    public class StaffRequest : HomeSectionModelBase, ISectionRequestWithImage
    {
        public EmployeeRequest[] Employees { get; set; }

        public bool IsFilesExtensionCorrect()
        {
            var images = Employees?.Where(s => s.Image != null).Select(s => s.Image) ?? Array.Empty<Image>();

            return !images.Any() || images.Any() && images.All(s => s.IsFileExtensionCorrect());
        }

        public bool IsAllBase64ImagesExist() => true;
    }
}