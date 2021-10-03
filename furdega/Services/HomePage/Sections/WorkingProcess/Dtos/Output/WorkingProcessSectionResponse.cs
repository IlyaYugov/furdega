namespace Furdega.Services.HomePage.Sections.WorkingProcess.Dtos.Output
{
    public class WorkingProcessSectionResponse: HomeSectionModelBase
    {
        public string FirstStage { get; set; }
        public string SecondStage { get; set; }
        public string ThirdStage { get; set; }
        public string FinalStage { get; set; }
    }
}