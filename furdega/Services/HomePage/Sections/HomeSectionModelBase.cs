namespace Furdega.Services.HomePage.Sections
{
    public abstract class HomeSectionModelBase
    {
        public const string ImagesExistingError = "Not All images were requested";

        public string Header { get; set; }
    }
}