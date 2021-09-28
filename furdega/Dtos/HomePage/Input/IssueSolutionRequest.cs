using Microsoft.AspNetCore.Http;

namespace Furdega.Dtos.HomePage.Input
{
    public class IssueSolutionRequest
    {
        public string Title { get; set; }
        public IFormFile Image { get; set; }
        public string Description { get; set; }
    }
}