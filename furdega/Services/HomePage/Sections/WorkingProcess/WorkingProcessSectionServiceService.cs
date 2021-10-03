using System.Threading.Tasks;
using AutoMapper;
using Furdega.DataAccess.Models;
using Furdega.DataAccess.Models.Enums;
using Furdega.Repositories.RepositoryBase;
using Furdega.Services.FileManagers;
using Furdega.Services.HomePage.Sections.WorkingProcess.Dtos.Input;
using Furdega.Services.HomePage.Sections.WorkingProcess.Dtos.Output;

namespace Furdega.Services.HomePage.Sections.WorkingProcess
{
    public class WorkingProcessSectionService : HomePageSectionServiceBase<WorkingProcessSectionRequest, WorkingProcessSectionResponse>
    {
        public WorkingProcessSectionService(
            IRepositoryBase<HomePageSection> homePageSectionRepository, 
            IImageManager fileManager, 
            IMapper mapper, 
            HomePageSectionType sectionType) 
            : base(homePageSectionRepository, fileManager, mapper, sectionType)
        {
        }

        public override async Task CreateSection(WorkingProcessSectionRequest sectionRequest)
        {
            var mappedSection = Mapper.Map<WorkingProcessSectionResponse>(sectionRequest);

            await CreateSection(mappedSection);
        }

        public override async Task UpdateSection(WorkingProcessSectionRequest sectionRequest)
        {
            var section = await GetSection();

            Mapper.Map(sectionRequest, section);

            await UpdateSection(section);
        }
    }
}