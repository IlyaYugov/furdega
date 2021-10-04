using Furdega.Services.FileManagers;
using Furdega.Services.HomePage.Sections;

namespace Furdega.Services.Materials.Dtos.Input
{
    public class MaterialRequest: IRequestWithImage
    {
        public int Id { get; set; }
        public string Title { get; set; }

        public Image Image { get; set; }

        public int MaterialTypeId { get; set; }

        public bool IsFilesExtensionCorrect()
        {
            throw new System.NotImplementedException();
        }

        public bool IsAllBase64ImagesExist()
        {
            throw new System.NotImplementedException();
        }
    }
}