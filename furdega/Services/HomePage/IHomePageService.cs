using System.Threading.Tasks;
using Furdega.Services.HomePage.Dtos.Output;

namespace Furdega.Services.HomePage
{
    public interface IHomePageService
    {
        Task<HomePageContent> GetFullPage();
    }
}