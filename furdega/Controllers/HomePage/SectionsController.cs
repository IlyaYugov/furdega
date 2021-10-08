using System.Threading.Tasks;
using Furdega.Services.HomePage;
using Furdega.Services.HomePage.Dtos.Output;
using Microsoft.AspNetCore.Mvc;

namespace Furdega.Controllers.HomePage
{
    [Route("api/[controller]")]
    [ApiController]
    public class SectionsController : ControllerBase
    {
        private readonly IHomePageService _homePageService;

        public SectionsController(IHomePageService homePageService)
        {
            _homePageService = homePageService;
        }

        [HttpGet]
        public async Task<HomePageContent> GetSections()
        {
            return await _homePageService.GetFullPage();
        }
    }
}
