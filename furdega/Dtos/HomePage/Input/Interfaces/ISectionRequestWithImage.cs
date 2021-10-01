namespace Furdega.Dtos.HomePage.Input.Interfaces
{
    public interface ISectionRequestWithImage
    {
        public bool IsFilesExtensionCorrect();

        public bool IsAllBase64ImagesExist();
    }
}