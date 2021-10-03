using Furdega.Services.FileManagers;

namespace Furdega.Services.HomePage.Sections.IssueSolutions.Dtos.Output
{
    public class IssueSolutionResponse
    {
        public string Title { get; set; }
        public ImageResponse Image { get; set; }
        public string Description { get; set; }
    }
}