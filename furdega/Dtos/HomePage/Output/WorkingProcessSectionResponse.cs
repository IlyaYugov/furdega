namespace Furdega.Dtos.HomePage.Output
{
    public class WorkingProcessSectionResponse: HomeSectionBase
    {
        public string FirstStage { get; set; }
        public string SecondStage { get; set; }
        public string ThirdStage { get; set; }
        public string FinalStage { get; set; }
    }
}