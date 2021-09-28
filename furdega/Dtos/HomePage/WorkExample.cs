﻿using System;

namespace Furdega.Dtos.HomePage
{
    public class WorkExample
    {
        public string Title { get; set; }

        public string FurnitureType { get; set; }
        public string Duration { get; set; }
        public string WorkType { get; set; }

        public string Description { get; set; }

        public string[] ImageBeforeUrls { get; set; } = Array.Empty<string>();
        public string[] ImageAfterUrls { get; set; } = Array.Empty<string>();
    }
}