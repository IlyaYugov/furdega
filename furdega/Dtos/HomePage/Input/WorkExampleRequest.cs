using Furdega.Services.FileManagers;

namespace Furdega.Dtos.HomePage.Input
{
    public class WorkExampleRequest
    {
        public string Title { get; set; }

        public string FurnitureType { get; set; }
        public string Duration { get; set; }
        public string WorkType { get; set; }

        public string Description { get; set; }

        public Image BeforeImage1 { get; set; }
        public Image BeforeImage2 { get; set; }
        public Image BeforeImage3 { get; set; }

        public Image AfterImage1 { get; set; }
        public Image AfterImage2 { get; set; }
        public Image AfterImage3 { get; set; }

        public Image[] GetAllImages => new[]
        {
            BeforeImage1,
            BeforeImage2,
            AfterImage1,
            AfterImage2,
            AfterImage3
        };
    }
}