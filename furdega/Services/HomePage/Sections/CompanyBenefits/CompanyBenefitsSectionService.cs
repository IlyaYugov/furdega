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
    public class CompanyBenefitsSectionService: HomePageSectionServiceBase<CompanyBenefitsSectionRequest, CompanyBenefitsSectionResponse>
    {
        public CompanyBenefitsSectionService(
            IRepositoryBase<HomePageSection> homePageSectionRepository,
            IImageManager fileManager, 
            IMapper mapper, 
            HomePageSectionType sectionType) 
            : base(homePageSectionRepository, fileManager, mapper, sectionType)
        {
        }

        public override async Task CreateSection(CompanyBenefitsSectionRequest sectionRequest)
        {
            var mappedSection = Mapper.Map<CompanyBenefitsSectionResponse>(sectionRequest);

            mappedSection.CompanyBenefit1.Image = await FileManager.LoadImage(sectionRequest.CompanyBenefit1.Image);
            mappedSection.CompanyBenefit2.Image = await FileManager.LoadImage(sectionRequest.CompanyBenefit2.Image);
            mappedSection.CompanyBenefit3.Image = await FileManager.LoadImage(sectionRequest.CompanyBenefit3.Image);
            mappedSection.CompanyBenefit4.Image = await FileManager.LoadImage(sectionRequest.CompanyBenefit4.Image);

            await CreateSection(mappedSection);
        }

        public override async Task UpdateSection(CompanyBenefitsSectionRequest sectionRequest)
        {
            var section = await GetSection();

            Mapper.Map(sectionRequest, section);

            await FileManager.LoadImage(sectionRequest.CompanyBenefit1?.Image);
            await FileManager.LoadImage(sectionRequest.CompanyBenefit2?.Image);
            await FileManager.LoadImage(sectionRequest.CompanyBenefit3?.Image);
            await FileManager.LoadImage(sectionRequest.CompanyBenefit4?.Image);

            await UpdateSection(section);
        }
    }
}