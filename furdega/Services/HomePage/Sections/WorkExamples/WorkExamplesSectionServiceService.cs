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

            mappedSection.WorkExample1.AfterImage1 = await FileManager.CreateImage(sectionRequest.WorkExample1.AfterImage1);
            mappedSection.WorkExample1.AfterImage2 = await FileManager.CreateImage(sectionRequest.WorkExample1.AfterImage2);
            mappedSection.WorkExample1.AfterImage3 = await FileManager.CreateImage(sectionRequest.WorkExample1.AfterImage3);
                                                                       
            mappedSection.WorkExample2.AfterImage1 = await FileManager.CreateImage(sectionRequest.WorkExample2.AfterImage1);
            mappedSection.WorkExample2.AfterImage2 = await FileManager.CreateImage(sectionRequest.WorkExample2.AfterImage2);
            mappedSection.WorkExample2.AfterImage3 = await FileManager.CreateImage(sectionRequest.WorkExample2.AfterImage3);
                                                                       
            mappedSection.WorkExample3.AfterImage1 = await FileManager.CreateImage(sectionRequest.WorkExample3.AfterImage1);
            mappedSection.WorkExample3.AfterImage2 = await FileManager.CreateImage(sectionRequest.WorkExample3.AfterImage2);
            mappedSection.WorkExample3.AfterImage3 = await FileManager.CreateImage(sectionRequest.WorkExample3.AfterImage3);


            mappedSection.WorkExample1.BeforeImage1 = await FileManager.CreateImage(sectionRequest.WorkExample1.BeforeImage1);
            mappedSection.WorkExample1.BeforeImage2 = await FileManager.CreateImage(sectionRequest.WorkExample1.BeforeImage2);
            mappedSection.WorkExample1.BeforeImage3 = await FileManager.CreateImage(sectionRequest.WorkExample1.BeforeImage3);
                                                                        
            mappedSection.WorkExample2.BeforeImage1 = await FileManager.CreateImage(sectionRequest.WorkExample2.BeforeImage1);
            mappedSection.WorkExample2.BeforeImage2 = await FileManager.CreateImage(sectionRequest.WorkExample2.BeforeImage2);
            mappedSection.WorkExample2.BeforeImage3 = await FileManager.CreateImage(sectionRequest.WorkExample2.BeforeImage3);
                                                                        
            mappedSection.WorkExample3.BeforeImage1 = await FileManager.CreateImage(sectionRequest.WorkExample3.BeforeImage1);
            mappedSection.WorkExample3.BeforeImage2 = await FileManager.CreateImage(sectionRequest.WorkExample3.BeforeImage2);
            mappedSection.WorkExample3.BeforeImage3 = await FileManager.CreateImage(sectionRequest.WorkExample3.BeforeImage3);

            await CreateSection(mappedSection);
        }

        public override async Task UpdateSection(WorkExamplesSectionRequest sectionRequest)
        {
            var section = await GetSection();

            Mapper.Map(sectionRequest, section);

            if(!string.IsNullOrEmpty(sectionRequest.WorkExample1.AfterImage1?.Base64ImageString))
                section.WorkExample1.AfterImage1 = await FileManager.UpdateImage(sectionRequest.WorkExample1.AfterImage1, section.WorkExample1.AfterImage1.ImageUrl);

            if (!string.IsNullOrEmpty(sectionRequest.WorkExample1.AfterImage2?.Base64ImageString))
                section.WorkExample1.AfterImage2 = await FileManager.UpdateImage(sectionRequest.WorkExample1.AfterImage2, section.WorkExample1.AfterImage2.ImageUrl);

            if (!string.IsNullOrEmpty(sectionRequest.WorkExample1.AfterImage3?.Base64ImageString))
                section.WorkExample1.AfterImage3 = await FileManager.UpdateImage(sectionRequest.WorkExample1.AfterImage3, section.WorkExample1.AfterImage3.ImageUrl);


            if (!string.IsNullOrEmpty(sectionRequest.WorkExample2.AfterImage1?.Base64ImageString))
                section.WorkExample2.AfterImage1 = await FileManager.UpdateImage(sectionRequest.WorkExample2.AfterImage1, section.WorkExample2.AfterImage1.ImageUrl);

            if (!string.IsNullOrEmpty(sectionRequest.WorkExample2.AfterImage2?.Base64ImageString))
                section.WorkExample2.AfterImage2 = await FileManager.UpdateImage(sectionRequest.WorkExample2.AfterImage2, section.WorkExample2.AfterImage2.ImageUrl);

            if (!string.IsNullOrEmpty(sectionRequest.WorkExample2.AfterImage3?.Base64ImageString))
                section.WorkExample2.AfterImage3 = await FileManager.UpdateImage(sectionRequest.WorkExample2.AfterImage3, section.WorkExample2.AfterImage3.ImageUrl);


            if (!string.IsNullOrEmpty(sectionRequest.WorkExample3.AfterImage1?.Base64ImageString))
                section.WorkExample3.AfterImage1 = await FileManager.UpdateImage(sectionRequest.WorkExample3.AfterImage1, section.WorkExample3.AfterImage1.ImageUrl);

            if (!string.IsNullOrEmpty(sectionRequest.WorkExample3.AfterImage2?.Base64ImageString))
                section.WorkExample3.AfterImage2 = await FileManager.UpdateImage(sectionRequest.WorkExample3.AfterImage2, section.WorkExample3.AfterImage2.ImageUrl);

            if (!string.IsNullOrEmpty(sectionRequest.WorkExample3.AfterImage3?.Base64ImageString))
                section.WorkExample3.AfterImage3 = await FileManager.UpdateImage(sectionRequest.WorkExample3.AfterImage3, section.WorkExample3.AfterImage3.ImageUrl);




            if (!string.IsNullOrEmpty(sectionRequest.WorkExample1.BeforeImage1?.Base64ImageString))
                section.WorkExample1.BeforeImage1 = await FileManager.UpdateImage(sectionRequest.WorkExample1.BeforeImage1, section.WorkExample1.BeforeImage1.ImageUrl);

            if (!string.IsNullOrEmpty(sectionRequest.WorkExample1.BeforeImage2?.Base64ImageString))
                section.WorkExample1.BeforeImage2 = await FileManager.UpdateImage(sectionRequest.WorkExample1.BeforeImage2, section.WorkExample1.BeforeImage2.ImageUrl);

            if (!string.IsNullOrEmpty(sectionRequest.WorkExample1.BeforeImage3?.Base64ImageString))
                section.WorkExample1.BeforeImage3 = await FileManager.UpdateImage(sectionRequest.WorkExample1.BeforeImage3, section.WorkExample1.BeforeImage3.ImageUrl);


            if (!string.IsNullOrEmpty(sectionRequest.WorkExample2.BeforeImage1?.Base64ImageString))
                section.WorkExample2.BeforeImage1 = await FileManager.UpdateImage(sectionRequest.WorkExample2.BeforeImage1, section.WorkExample2.BeforeImage1.ImageUrl);

            if (!string.IsNullOrEmpty(sectionRequest.WorkExample2.BeforeImage2?.Base64ImageString))
                section.WorkExample2.BeforeImage2 = await FileManager.UpdateImage(sectionRequest.WorkExample2.BeforeImage2, section.WorkExample2.BeforeImage2.ImageUrl);

            if (!string.IsNullOrEmpty(sectionRequest.WorkExample2.BeforeImage3?.Base64ImageString))
                section.WorkExample2.BeforeImage3 = await FileManager.UpdateImage(sectionRequest.WorkExample2.BeforeImage3, section.WorkExample2.BeforeImage3.ImageUrl);


            if (!string.IsNullOrEmpty(sectionRequest.WorkExample3.BeforeImage1?.Base64ImageString))
                section.WorkExample3.BeforeImage1 = await FileManager.UpdateImage(sectionRequest.WorkExample3.BeforeImage1, section.WorkExample3.BeforeImage1.ImageUrl);

            if (!string.IsNullOrEmpty(sectionRequest.WorkExample3.BeforeImage2?.Base64ImageString))
                section.WorkExample3.BeforeImage2 = await FileManager.UpdateImage(sectionRequest.WorkExample3.BeforeImage2, section.WorkExample3.BeforeImage2.ImageUrl);

            if (!string.IsNullOrEmpty(sectionRequest.WorkExample3.BeforeImage3?.Base64ImageString))
                section.WorkExample3.BeforeImage3 = await FileManager.UpdateImage(sectionRequest.WorkExample3.BeforeImage3, section.WorkExample3.BeforeImage3.ImageUrl);

            await UpdateSection(section);
        }
    }
}