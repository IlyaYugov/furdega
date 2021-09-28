using System;
using Microsoft.AspNetCore.Http;

namespace Furdega.Dtos.HomePage.Input
{
    public class WorkExampleRequest
    {
        public string Title { get; set; }

        public string FurnitureType { get; set; }
        public string Duration { get; set; }
        public string WorkType { get; set; }

        public string Description { get; set; }

        public IFormFile[] BeforeImages { get; set; }
        public IFormFile[] AfterImages { get; set; }
    }
}