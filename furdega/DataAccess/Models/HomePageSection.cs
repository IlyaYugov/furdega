using Furdega.Repositories.RepositoryBase;

namespace Furdega.DataAccess.Models
{
    public class HomePageSection: BaseEntity
    {
        public int SectionTypeId { get; set; }

        //one of SectionResponseModel into json
        public string SectionContent { get; set; }
    }
}