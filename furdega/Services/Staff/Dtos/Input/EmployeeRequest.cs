﻿using Furdega.Services.FileManagers;
using Furdega.Services.HomePage.Sections;

namespace Furdega.Services.Staff.Dtos.Input
{
    public class EmployeeRequest: IRequestWithImage
    {
        public string Title { get; set; }
        public Image Image { get; set; }
        public string Description { get; set; }

        public bool IsFilesExtensionCorrect()
        {
            return Image == null || Image != null && Image.IsFileExtensionCorrect();
        }

        public bool IsAllBase64ImagesExist() => Image?.Base64ImageString != null;
    }
}