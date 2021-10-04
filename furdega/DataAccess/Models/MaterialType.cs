using System.Collections.Generic;
using Furdega.Repositories.RepositoryBase;

namespace Furdega.DataAccess.Models
{
    public class MaterialType: BaseEntity
    {
        public string Title { get; set; }

        public List<Furniture> Furniture { get; set; }

        public List<Material> Materials { get; set; }
    }
}
