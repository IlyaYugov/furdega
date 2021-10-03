using AutoMapper;
using Furdega.DataAccess.Models;
using Furdega.DataAccess.Models.Enums;
using Furdega.Repositories.RepositoryBase;
using Furdega.Services.FileManagers;
using Furdega.Services.HomePage.Sections.WorkingProcess.Dtos.Input;
using Furdega.Services.HomePage.Sections.WorkingProcess.Dtos.Output;

namespace Furdega.Services.HomePage.Sections.WorkingProcess
{
    public class WorkingProcessSectionService: HomePageSectionServiceBase<WorkingProcessSectionRequest, WorkingProcessSectionResponse>, 
        IWorkingProcessSectionService
    {
        public WorkingProcessSectionService(
            IRepositoryBase<HomePageSection> homePageSectionRepository, 
            IImageManager fileManager, 
            IMapper mapper) 
            : base(homePageSectionRepository, fileManager, mapper, HomePageSectionType.WorkingProcessSection)
        {
        }
    }
}