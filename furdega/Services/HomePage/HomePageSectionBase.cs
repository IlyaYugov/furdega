using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using AutoMapper;
using Furdega.DataAccess.Models;
using Furdega.DataAccess.Models.Enums;
using Furdega.Dtos.HomePage.Output;
using Furdega.Repositories.RepositoryBase;
using Furdega.Services.FileManagers;

namespace Furdega.Services.HomePage
{
    public abstract class HomePageSectionBase<TSectionRequest, TSectionResponse>
    {
        protected readonly IRepositoryBase<HomePageSection> HomePageSectionRepository;

        protected readonly IImageManager FileManager;
        protected readonly IMapper Mapper;

        protected readonly HomePageSectionType SectionType;

        protected HomePageSectionBase(
            IRepositoryBase<HomePageSection> homePageSectionRepository,
            IImageManager fileManager, 
            IMapper mapper,
            HomePageSectionType sectionType)
        {
            HomePageSectionRepository = homePageSectionRepository;
            SectionType = sectionType;
            FileManager = fileManager;
            Mapper = mapper;
        }

        protected async Task CreateSection(HomePageSectionType sectionType, TSectionResponse sectionContent)
        {
            var existingSections = await HomePageSectionRepository.GetItems(s => s.SectionTypeId == (int)sectionType);

            if (existingSections.FirstOrDefault() != null)
                throw new Exception($"Section with type:{sectionType} already exist");

            var section = new HomePageSection
            {
                SectionTypeId = (int)sectionType,
                SectionContent = JsonSerializer.Serialize(sectionContent)
            };

            await HomePageSectionRepository.Create(section);
        }

        protected async Task UpdateSection(HomePageSectionType sectionType, TSectionResponse sectionContent)
        {
            var existingSections = await HomePageSectionRepository.GetItems(s => s.SectionTypeId == (int)sectionType);

            var section = existingSections.FirstOrDefault();

            if (section == null)
                throw new Exception($"Section with type:{sectionType} is not exist");

            section.SectionContent = JsonSerializer.Serialize(sectionContent);

            await HomePageSectionRepository.Create(section);
        }

        public async Task<TSectionResponse> GetSection()
        {
            var section = await HomePageSectionRepository.FirstOrDefault(s => s.SectionTypeId == (int)SectionType);

            return JsonSerializer.Deserialize<TSectionResponse>(section.SectionContent ?? "{}");
        }
    }
}