using System;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using AutoMapper;
using Furdega.DataAccess.Models;
using Furdega.DataAccess.Models.Enums;
using Furdega.Repositories.RepositoryBase;
using Furdega.Services.FileManagers;

namespace Furdega.Services.HomePage.Sections
{
    public abstract class HomePageSectionServiceBase<TSectionRequest, TSectionResponse>: IHomePageSectionService<TSectionRequest, TSectionResponse>
    {
        protected readonly IRepositoryBase<HomePageSection> HomePageSectionRepository;

        protected readonly IImageManager FileManager;
        protected readonly IMapper Mapper;

        protected readonly HomePageSectionType SectionType;

        protected HomePageSectionServiceBase(
            IRepositoryBase<HomePageSection> homePageSectionRepository,
            IImageManager fileManager, 
            IMapper mapper,
            HomePageSectionType sectionType)
        {
            HomePageSectionRepository = homePageSectionRepository;
            FileManager = fileManager;
            Mapper = mapper;
            SectionType = sectionType;
        }

        public virtual async Task CreateSection(TSectionRequest sectionRequest)
        {
            var mappedSection = Mapper.Map<TSectionResponse>(sectionRequest);

            await CreateSection(mappedSection);
        }

        public virtual async Task UpdateSection(TSectionRequest sectionRequest)
        {
            var section = await GetSection();

            Mapper.Map(sectionRequest, section);

            await UpdateSection(section);
        }

        public async Task<TSectionResponse> GetSection()
        {
            var section = await HomePageSectionRepository.FirstOrDefault(s => s.SectionTypeId == (int)SectionType);

            return JsonSerializer.Deserialize<TSectionResponse>(section.SectionContent ?? "{}");
        }

        protected async Task CreateSection(TSectionResponse sectionContent)
        {
            var existingSections = await HomePageSectionRepository.GetItems(s => s.SectionTypeId == (int)SectionType);

            if (existingSections.FirstOrDefault() != null)
                throw new Exception($"Section with type: {SectionType} already exist");

            var section = new HomePageSection
            {
                SectionTypeId = (int)SectionType,
                SectionContent = JsonSerializer.Serialize(sectionContent)
            };

            await HomePageSectionRepository.Create(section);
        }

        protected async Task UpdateSection(TSectionResponse sectionContent)
        {
            var existingSections = await HomePageSectionRepository.GetItems(s => s.SectionTypeId == (int)SectionType);

            var section = existingSections.FirstOrDefault();

            if (section == null)
                throw new Exception($"Section with type: {SectionType} is not exist");

            section.SectionContent = JsonSerializer.Serialize(sectionContent);

            await HomePageSectionRepository.Create(section);
        }
    }
}