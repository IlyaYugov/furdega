using Furdega.Dtos.HomePage.Input.Interfaces;

namespace Furdega.Dtos.HomePage.Input
{
    public class WorkingProcessSectionRequest: HomeSectionBase, ISectionRequestWithImage
    {
        public string FirstStage { get; set; }
        public string SecondStage { get; set; }
        public string ThirdStage { get; set; }
        public string FinalStage { get; set; }

        public bool IsFilesExtensionCorrect() => true;
        public bool IsAllBase64ImagesExist() => true;
    }
}