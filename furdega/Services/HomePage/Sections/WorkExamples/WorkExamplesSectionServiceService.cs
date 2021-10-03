using System.Threading.Tasks;
using AutoMapper;
using Furdega.DataAccess.Models;
using Furdega.DataAccess.Models.Enums;
using Furdega.Repositories.RepositoryBase;
using Furdega.Services.FileManagers;
using Furdega.Services.HomePage.Sections.WorkExamples.Dtos.Input;
using Furdega.Services.HomePage.Sections.WorkExamples.Dtos.Output;

namespace Furdega.Services.HomePage.Sections.WorkExamples
{
    public class WorkExamplesSectionService: HomePageSectionServiceBase<WorkExamplesSectionRequest, WorkExamplesSectionResponse>, IWorkExamplesSectionService
    {
        public WorkExamplesSectionService(
            IRepositoryBase<HomePageSection> homePageSectionRepository,
            IImageManager fileManager,
            IMapper mapper) 
            : base(homePageSectionRepository, fileManager, mapper, HomePageSectionType.WorkExamplesSection)
        {
        }

        public override async Task CreateSection(WorkExamplesSectionRequest sectionRequest)
        {
            var mappedSection = Mapper.Map<WorkExamplesSectionResponse>(sectionRequest);

            mappedSection.WorkExample1.AfterImage1 = await FileManager.LoadImage(sectionRequest.WorkExample1.AfterImage1);
            mappedSection.WorkExample1.AfterImage2 = await FileManager.LoadImage(sectionRequest.WorkExample1.AfterImage2);
            mappedSection.WorkExample1.AfterImage3 = await FileManager.LoadImage(sectionRequest.WorkExample1.AfterImage3);

            mappedSection.WorkExample2.AfterImage1 = await FileManager.LoadImage(sectionRequest.WorkExample2.AfterImage1);
            mappedSection.WorkExample2.AfterImage2 = await FileManager.LoadImage(sectionRequest.WorkExample2.AfterImage2);
            mappedSection.WorkExample2.AfterImage3 = await FileManager.LoadImage(sectionRequest.WorkExample2.AfterImage3);

            mappedSection.WorkExample3.AfterImage1 = await FileManager.LoadImage(sectionRequest.WorkExample3.AfterImage1);
            mappedSection.WorkExample3.AfterImage2 = await FileManager.LoadImage(sectionRequest.WorkExample3.AfterImage2);
            mappedSection.WorkExample3.AfterImage3 = await FileManager.LoadImage(sectionRequest.WorkExample3.AfterImage3);


            mappedSection.WorkExample1.BeforeImage1 = await FileManager.LoadImage(sectionRequest.WorkExample1.BeforeImage1);
            mappedSection.WorkExample1.BeforeImage2 = await FileManager.LoadImage(sectionRequest.WorkExample1.BeforeImage2);
            mappedSection.WorkExample1.BeforeImage3 = await FileManager.LoadImage(sectionRequest.WorkExample1.BeforeImage3);

            mappedSection.WorkExample2.BeforeImage1 = await FileManager.LoadImage(sectionRequest.WorkExample2.BeforeImage1);
            mappedSection.WorkExample2.BeforeImage2 = await FileManager.LoadImage(sectionRequest.WorkExample2.BeforeImage2);
            mappedSection.WorkExample2.BeforeImage3 = await FileManager.LoadImage(sectionRequest.WorkExample2.BeforeImage3);

            mappedSection.WorkExample3.BeforeImage1 = await FileManager.LoadImage(sectionRequest.WorkExample3.BeforeImage1);
            mappedSection.WorkExample3.BeforeImage2 = await FileManager.LoadImage(sectionRequest.WorkExample3.BeforeImage2);
            mappedSection.WorkExample3.BeforeImage3 = await FileManager.LoadImage(sectionRequest.WorkExample3.BeforeImage3);

            await CreateSection(mappedSection);
        }

        public override async Task UpdateSection(WorkExamplesSectionRequest sectionRequest)
        {
            var section = await GetSection();

            Mapper.Map(sectionRequest, section);

            await FileManager.LoadImage(sectionRequest.WorkExample1?.AfterImage1);
            await FileManager.LoadImage(sectionRequest.WorkExample1?.AfterImage2);
            await FileManager.LoadImage(sectionRequest.WorkExample1?.AfterImage3);
                                                                   
            await FileManager.LoadImage(sectionRequest.WorkExample2?.AfterImage1);
            await FileManager.LoadImage(sectionRequest.WorkExample2?.AfterImage2);
            await FileManager.LoadImage(sectionRequest.WorkExample2?.AfterImage3);
                                                                   
            await FileManager.LoadImage(sectionRequest.WorkExample3?.AfterImage1);
            await FileManager.LoadImage(sectionRequest.WorkExample3?.AfterImage2);
            await FileManager.LoadImage(sectionRequest.WorkExample3?.AfterImage3);


            await FileManager.LoadImage(sectionRequest.WorkExample1?.BeforeImage1);
            await FileManager.LoadImage(sectionRequest.WorkExample1?.BeforeImage2);
            await FileManager.LoadImage(sectionRequest.WorkExample1?.BeforeImage3);
                                                                   
            await FileManager.LoadImage(sectionRequest.WorkExample2?.BeforeImage1);
            await FileManager.LoadImage(sectionRequest.WorkExample2?.BeforeImage2);
            await FileManager.LoadImage(sectionRequest.WorkExample2?.BeforeImage3);
                                                                   
            await FileManager.LoadImage(sectionRequest.WorkExample3?.BeforeImage1);
            await FileManager.LoadImage(sectionRequest.WorkExample3?.BeforeImage2);
            await FileManager.LoadImage(sectionRequest.WorkExample3?.BeforeImage3);

            await UpdateSection(section);
        }
    }
}