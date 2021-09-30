namespace Furdega.Dtos.HomePage.Input
{
    public class WorkExampleRequest
    {
        public int Position { get; set; }

        public string Title { get; set; }

        public string FurnitureType { get; set; }
        public string Duration { get; set; }
        public string WorkType { get; set; }

        public string Description { get; set; }

        public ImageRequest BeforeImage1 { get; set; }
        public ImageRequest BeforeImage2 { get; set; }
        public ImageRequest BeforeImage3 { get; set; }

        public ImageRequest AfterImage1 { get; set; }
        public ImageRequest AfterImage2 { get; set; }
        public ImageRequest AfterImage3 { get; set; }
    }
}