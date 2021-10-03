using System.Threading.Tasks;
using AutoMapper;
using Furdega.DataAccess.Models;
using Furdega.DataAccess.Models.Enums;
using Furdega.Repositories.RepositoryBase;
using Furdega.Services.FileManagers;
using Furdega.Services.HomePage.Sections.MainHome.Dtos.Input;
using Furdega.Services.HomePage.Sections.MainHome.Dtos.Output;

namespace Furdega.Services.HomePage.Sections.MainHome
{
    public class MainHomeSectionService: HomePageSectionServiceBase<MainHomeSectionRequest, MainHomeSectionResponse>
    {
        public MainHomeSectionService(IRepositoryBase<HomePageSection> homePageSectionRepository, IImageManager fileManager, IMapper mapper, HomePageSectionType sectionType) : base(homePageSectionRepository, fileManager, mapper, sectionType)
        {
        }

        public override async Task CreateSection(MainHomeSectionRequest sectionRequest)
        {
            var mappedSection = Mapper.Map<MainHomeSectionResponse>(sectionRequest);

            mappedSection.Image = await FileManager.LoadImage(sectionRequest.Image);

            await CreateSection(mappedSection);
        }

        public override async Task UpdateSection(MainHomeSectionRequest sectionRequest)
        {
            var section = await GetSection();

            Mapper.Map(sectionRequest, section);

            await FileManager.LoadImage(sectionRequest?.Image);

            await UpdateSection(section);
        }
    }
}