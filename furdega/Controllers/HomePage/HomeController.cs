using System.Threading.Tasks;
using Furdega.DataAccess.Models.Enums;
using Furdega.Services.FileManagers;
using Furdega.Services.HomePage;
using Furdega.Services.HomePage.Dtos.Output;
using Microsoft.AspNetCore.Mvc;

namespace Furdega.Controllers.HomePage
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly IHomePageService _homePageService;

        public HomeController(IHomePageService homePageService)
        {
            _homePageService = homePageService;
        }

        [HttpGet]
        public async Task<HomePageContent> GetHomePageContent()
        {
            return await _homePageService.GetFullPage();
        }
    }
}
