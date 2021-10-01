using Furdega.Services.FileManagers;

namespace Furdega.Dtos.HomePage.Input
{
    public class IssueSolutionRequest
    {
        public string Title { get; set; }
        public Image Image { get; set; }
        public string Description { get; set; }
    }
}