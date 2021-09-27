using System.ComponentModel.DataAnnotations;

namespace Furdega.Repositories.RepositoryBase
{
    public class BaseEntity
    {
        [Key]
        public int Id { get; set; }
    }
}
