using System.Threading.Tasks;
using AutoMapper;
using Furdega.DataAccess.Models;
using Furdega.DataAccess.Models.Enums;
using Furdega.Repositories.RepositoryBase;
using Furdega.Services.FileManagers;
using Furdega.Services.HomePage.Sections.Staff.Dtos.Input;
using Furdega.Services.HomePage.Sections.Staff.Dtos.Output;

namespace Furdega.Services.HomePage.Sections.Staff
{
    public class StaffSectionService: HomePageSectionServiceBase<StaffRequest, StaffResponse>
    {
        public StaffSectionService(
            IRepositoryBase<HomePageSection> homePageSectionRepository,
            IImageManager fileManager,
            IMapper mapper)
            : base(homePageSectionRepository, fileManager, mapper, HomePageSectionType.AboutSection)
        {
        }

        public override async Task CreateSection(StaffRequest sectionRequest)
        {
            var mappedSection = Mapper.Map<StaffResponse>(sectionRequest);

            await CreateSection(mappedSection);
        }

        public override async Task UpdateSection(StaffRequest sectionRequest)
        {
            var section = await GetSection();

            Mapper.Map(sectionRequest, section);

            await UpdateSection(section);
        }
    }
}