namespace Furdega.Services.HomePage.Sections
{
    public interface IRequestWithImage
    {
        public bool IsFilesExtensionCorrect();

        public bool IsAllBase64ImagesExist();
    }
}