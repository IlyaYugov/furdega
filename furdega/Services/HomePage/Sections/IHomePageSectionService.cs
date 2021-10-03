using System.Threading.Tasks;

namespace Furdega.Services.HomePage.Sections
{
    public interface IHomePageSectionService<TSectionRequest, TSectionResponse>
    {
        Task CreateSection(TSectionRequest sectionRequest);

        Task UpdateSection(TSectionRequest sectionRequest);

        Task<TSectionResponse> GetSection();
    }
}