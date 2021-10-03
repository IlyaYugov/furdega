using AutoMapper;
using Furdega.DataAccess.Models;
using Furdega.DataAccess.Models.Enums;
using Furdega.Repositories.RepositoryBase;
using Furdega.Services.FileManagers;
using Furdega.Services.HomePage.Sections.Staff.Dtos.Input;
using Furdega.Services.HomePage.Sections.Staff.Dtos.Output;

namespace Furdega.Services.HomePage.Sections.Staff
{
    public class StaffSectionService: HomePageSectionServiceBase<StaffRequest, StaffResponse>, IStaffSectionService
    {
        public StaffSectionService(
            IRepositoryBase<HomePageSection> homePageSectionRepository,
            IImageManager fileManager,
            IMapper mapper)
            : base(homePageSectionRepository, fileManager, mapper, HomePageSectionType.StaffSection)
        {
        }
    }
}