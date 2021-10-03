namespace Furdega.Services.HomePage.Sections
{
    public interface ISectionRequestWithImage
    {
        public bool IsFilesExtensionCorrect();

        public bool IsAllBase64ImagesExist();
    }
}