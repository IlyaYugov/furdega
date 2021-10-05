using System.Threading.Tasks;
using AutoMapper;
using Furdega.DataAccess.Models;
using Furdega.DataAccess.Models.Enums;
using Furdega.Repositories.RepositoryBase;
using Furdega.Services.FileManagers;
using Furdega.Services.HomePage.Sections.CompanyBenefits.Dtos.Input;
using Furdega.Services.HomePage.Sections.CompanyBenefits.Dtos.Output;

namespace Furdega.Services.HomePage.Sections.CompanyBenefits
{
    public class CompanyBenefitsSectionService: HomePageSectionServiceBase<CompanyBenefitsSectionRequest, CompanyBenefitsSectionResponse>, ICompanyBenefitsSectionService
    {
        public CompanyBenefitsSectionService(
            IRepositoryBase<HomePageSection> homePageSectionRepository,
            IImageManager fileManager, 
            IMapper mapper) 
            : base(homePageSectionRepository, fileManager, mapper, HomePageSectionType.CompanyBenefitsSection)
        {
        }

        public override async Task CreateSection(CompanyBenefitsSectionRequest sectionRequest)
        {
            var mappedSection = Mapper.Map<CompanyBenefitsSectionResponse>(sectionRequest);

            mappedSection.CompanyBenefit1.Image = await FileManager.CreateImage(sectionRequest.CompanyBenefit1.Image);
            mappedSection.CompanyBenefit2.Image = await FileManager.CreateImage(sectionRequest.CompanyBenefit2.Image);
            mappedSection.CompanyBenefit3.Image = await FileManager.CreateImage(sectionRequest.CompanyBenefit3.Image);
            mappedSection.CompanyBenefit4.Image = await FileManager.CreateImage(sectionRequest.CompanyBenefit4.Image);

            await CreateSection(mappedSection);
        }

        public override async Task UpdateSection(CompanyBenefitsSectionRequest sectionRequest)
        {
            var section = await GetSection();

            Mapper.Map(sectionRequest, section);


            if(!string.IsNullOrEmpty(sectionRequest.CompanyBenefit1.Image?.Base64ImageString))
                section.CompanyBenefit1.Image = await FileManager.UpdateImage(sectionRequest.CompanyBenefit1.Image, section.CompanyBenefit1.Image.ImageUrl);

            if (!string.IsNullOrEmpty(sectionRequest.CompanyBenefit2.Image?.Base64ImageString))
                section.CompanyBenefit2.Image = await FileManager.UpdateImage(sectionRequest.CompanyBenefit2.Image, section.CompanyBenefit2.Image.ImageUrl);

            if (!string.IsNullOrEmpty(sectionRequest.CompanyBenefit3.Image?.Base64ImageString))
                section.CompanyBenefit3.Image = await FileManager.UpdateImage(sectionRequest.CompanyBenefit3.Image, section.CompanyBenefit3.Image.ImageUrl);

            if (!string.IsNullOrEmpty(sectionRequest.CompanyBenefit4.Image?.Base64ImageString))
                section.CompanyBenefit4.Image = await FileManager.UpdateImage(sectionRequest.CompanyBenefit4.Image, section.CompanyBenefit4.Image.ImageUrl);

            await UpdateSection(section);
        }
    }
}