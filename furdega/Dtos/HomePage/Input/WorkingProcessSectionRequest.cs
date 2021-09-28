namespace Furdega.Dtos.HomePage.Input
{
    public class WorkingProcessSectionRequest: HomeSectionBase
    {
        public string FirstStage { get; set; }
        public string SecondStage { get; set; }
        public string ThirdStage { get; set; }
        public string FinalStage { get; set; }
    }
}