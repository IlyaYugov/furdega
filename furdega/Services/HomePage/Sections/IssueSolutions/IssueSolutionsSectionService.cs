using System.Threading.Tasks;
using AutoMapper;
using Furdega.DataAccess.Models;
using Furdega.DataAccess.Models.Enums;
using Furdega.Repositories.RepositoryBase;
using Furdega.Services.FileManagers;
using Furdega.Services.HomePage.Sections.IssueSolutions.Dtos.Input;
using Furdega.Services.HomePage.Sections.IssueSolutions.Dtos.Output;

namespace Furdega.Services.HomePage.Sections.IssueSolutions
{
    public class IssueSolutionsSectionService: HomePageSectionServiceBase<IssueSolutionsSectionRequest, IssueSolutionsSectionResponse>, IIssueSolutionsSectionService
    {
        public IssueSolutionsSectionService(
            IRepositoryBase<HomePageSection> homePageSectionRepository, 
            IImageManager fileManager, 
            IMapper mapper) 
            : base(homePageSectionRepository, fileManager, mapper, HomePageSectionType.IssueSolutionsSection)
        {
        }

        public override async Task CreateSection(IssueSolutionsSectionRequest sectionRequest)
        {
            var mappedSection = Mapper.Map<IssueSolutionsSectionResponse>(sectionRequest);

            mappedSection.IssueSolution1.Image = await FileManager.CreateImage(sectionRequest.IssueSolution1.Image);
            mappedSection.IssueSolution2.Image = await FileManager.CreateImage(sectionRequest.IssueSolution2.Image);
            mappedSection.IssueSolution3.Image = await FileManager.CreateImage(sectionRequest.IssueSolution3.Image);
            mappedSection.IssueSolution4.Image = await FileManager.CreateImage(sectionRequest.IssueSolution4.Image);

            await CreateSection(mappedSection);
        }

        public override async Task UpdateSection(IssueSolutionsSectionRequest sectionRequest)
        {
            var section = await GetSection();

            Mapper.Map(sectionRequest, section);

            if(!string.IsNullOrEmpty(sectionRequest.IssueSolution1.Image?.Base64ImageString))
                section.IssueSolution1.Image = await FileManager.UpdateImage(sectionRequest.IssueSolution1.Image, section.IssueSolution1.Image.ImageUrl);

            if (!string.IsNullOrEmpty(sectionRequest.IssueSolution2.Image?.Base64ImageString))
                section.IssueSolution2.Image = await FileManager.UpdateImage(sectionRequest.IssueSolution2.Image, section.IssueSolution2.Image.ImageUrl);

            if (!string.IsNullOrEmpty(sectionRequest.IssueSolution3.Image?.Base64ImageString))
                section.IssueSolution3.Image = await FileManager.UpdateImage(sectionRequest.IssueSolution3.Image, section.IssueSolution3.Image.ImageUrl);

            if (!string.IsNullOrEmpty(sectionRequest.IssueSolution4.Image?.Base64ImageString))
                section.IssueSolution4.Image = await FileManager.UpdateImage(sectionRequest.IssueSolution4.Image, section.IssueSolution4.Image.ImageUrl);

            await UpdateSection(section);
        }
    }
}