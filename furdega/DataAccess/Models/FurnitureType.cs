using System.Collections.Generic;
using Furdega.Repositories.RepositoryBase;

namespace Furdega.DataAccess.Models
{
    public class FurnitureType: BaseEntity
    {
        public string Title { get; set; }

        public List<Furniture> Furniture { get; set; }
    }
}
