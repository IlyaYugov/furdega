using Microsoft.AspNetCore.Http;

namespace Furdega.Dtos.HomePage.Input
{
    public class MainHomeSectionRequest: HomeSectionBase
    {
        public IFormFile Image { get; set; }
    }
}