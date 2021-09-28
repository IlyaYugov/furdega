using Furdega.Repositories.RepositoryBase;

namespace Furdega.DataAccess.Models
{
    public class HomePageSection: BaseEntity
    {
        public int SectionTypeId { get; set; }
        public string SectionContent { get; set; }
    }
}