using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;

namespace Furdega.Dtos.HomePage.Output
{
    public class WorkExampleResponse
    {
        public string Title { get; set; }

        public string FurnitureType { get; set; }
        public string Duration { get; set; }
        public string WorkType { get; set; }

        public string Description { get; set; }

        public IList<string> BeforeImageUrls { get; set; } = Array.Empty<string>();
        public IList<string> AfterImageUrls { get; set; } = Array.Empty<string>();
    }
}