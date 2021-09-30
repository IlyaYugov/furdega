using System;

namespace Furdega.Dtos.HomePage.Input
{
    public class ImageRequest
    {
        public Guid Id { get; set; }
        public string Base64ImageString { get; set; }
    }
}