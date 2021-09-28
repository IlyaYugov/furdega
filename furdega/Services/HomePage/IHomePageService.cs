using System.Threading.Tasks;
using Furdega.DataAccess.Models.Enums;
using Furdega.Dtos.HomePage;

namespace Furdega.Services.HomePage
{
    public interface IHomePageService
    {
        Task<HomePageContent> GetFullPage();
        Task CreateOrUpdateSection(HomePageSectionType sectionType, object sectionContent);
    }
}