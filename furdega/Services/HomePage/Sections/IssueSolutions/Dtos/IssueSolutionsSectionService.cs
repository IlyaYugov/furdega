using System.Threading.Tasks;
using AutoMapper;
using Furdega.DataAccess.Models;
using Furdega.DataAccess.Models.Enums;
using Furdega.Repositories.RepositoryBase;
using Furdega.Services.FileManagers;
using Furdega.Services.HomePage.Sections.IssueSolutions.Dtos.Input;
using Furdega.Services.HomePage.Sections.IssueSolutions.Dtos.Output;

namespace Furdega.Services.HomePage.Sections.IssueSolutions.Dtos
{
    public class IssueSolutionsSectionService: HomePageSectionServiceBase<IssueSolutionsSectionRequest, IssueSolutionsSectionResponse>
    {
        public IssueSolutionsSectionService(
            IRepositoryBase<HomePageSection> homePageSectionRepository, 
            IImageManager fileManager, 
            IMapper mapper, 
            HomePageSectionType sectionType) 
            : base(homePageSectionRepository, fileManager, mapper, sectionType)
        {
        }

        public override async Task CreateSection(IssueSolutionsSectionRequest sectionRequest)
        {
            var mappedSection = Mapper.Map<IssueSolutionsSectionResponse>(sectionRequest);

            mappedSection.IssueSolution1.Image = await FileManager.LoadImage(sectionRequest.IssueSolution1.Image);
            mappedSection.IssueSolution2.Image = await FileManager.LoadImage(sectionRequest.IssueSolution2.Image);
            mappedSection.IssueSolution3.Image = await FileManager.LoadImage(sectionRequest.IssueSolution3.Image);
            mappedSection.IssueSolution4.Image = await FileManager.LoadImage(sectionRequest.IssueSolution4.Image);

            await CreateSection(mappedSection);
        }

        public override async Task UpdateSection(IssueSolutionsSectionRequest sectionRequest)
        {
            var section = await GetSection();

            Mapper.Map(sectionRequest, section);

            await FileManager.LoadImage(sectionRequest.IssueSolution1?.Image);
            await FileManager.LoadImage(sectionRequest.IssueSolution2?.Image);
            await FileManager.LoadImage(sectionRequest.IssueSolution3?.Image);
            await FileManager.LoadImage(sectionRequest.IssueSolution4?.Image);

            await UpdateSection(section);
        }
    }
}