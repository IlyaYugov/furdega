using System;
using Furdega.Repositories.RepositoryBase;

namespace Furdega.DataAccess.Models
{
    public class Material: BaseEntity
    {
        public string Title { get; set; }

        public Guid ImageId { get; set; }
        public string ImageUrl { get; set; }

        public int MaterialTypeId { get; set; }
    }
}