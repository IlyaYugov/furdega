using AutoMapper;
using Furdega.DataAccess.Models;
using Furdega.DataAccess.Models.Enums;
using Furdega.Repositories.RepositoryBase;
using Furdega.Services.FileManagers;
using Furdega.Services.HomePage.Sections.About.Dtos.Input;
using Furdega.Services.HomePage.Sections.About.Dtos.Output;

namespace Furdega.Services.HomePage.Sections.About
{
    public class AboutSectionService: HomePageSectionServiceBase<AboutSectionRequest, AboutSectionResponse>, IAboutSectionService
    {
        public AboutSectionService(
            IRepositoryBase<HomePageSection> homePageSectionRepository, 
            IImageManager fileManager, 
            IMapper mapper) 
            : base(homePageSectionRepository, fileManager, mapper, HomePageSectionType.AboutSection)
        {
        }
    }
}