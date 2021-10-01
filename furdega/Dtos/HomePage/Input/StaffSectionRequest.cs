using System;
using System.Linq;
using Furdega.Services.FileManagers;

namespace Furdega.Dtos.HomePage.Input
{
    public class StaffSectionRequest : HomeSectionBase
    {
        public EmployeeRequest[] Employees { get; set; }

        public override bool IsFilesExtensionCorrect()
        {
            var images = Employees?.Where(s => s.Image != null).Select(s => s.Image) ?? Array.Empty<Image>();

            return !images.Any() || images.Any() && images.All(s => s.IsFileExtensionCorrect());
        }

        public override bool IsAllBase64ImagesExist() => true;
    }
}