using Furdega.Repositories.RepositoryBase;

namespace Furdega.DataAccess.Models
{
    public class User: BaseEntity
    {
        public string Login { get; set; }
        public string Password { get; set; }
    }
}