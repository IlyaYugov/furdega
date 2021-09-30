using System;
using System.Collections.Generic;

namespace Furdega.Dtos.HomePage.Output
{
    public class WorkExampleResponse
    {
        public int Position { get; set; }

        public string Title { get; set; }

        public string FurnitureType { get; set; }
        public string Duration { get; set; }
        public string WorkType { get; set; }

        public string Description { get; set; }

        public ImageResponse BeforeImage1 { get; set; }
        public ImageResponse BeforeImage2 { get; set; }
        public ImageResponse BeforeImage3 { get; set; }

        public ImageResponse AfterImage1 { get; set; }
        public ImageResponse AfterImage2 { get; set; }
        public ImageResponse AfterImage3 { get; set; }
    }

    public class ImageResponse
    {
        public Guid Id { get; set; }
        public string ImageUrl { get; set; }
    }
}