using System;
using Furdega.Repositories.RepositoryBase;

namespace Furdega.DataAccess.Models
{
    public class Furniture: BaseEntity
    {
        public Guid BeforeImageId { get; set; }
        public string BeforeImageUrl { get; set; }

        public Guid AfterImageId { get; set; }
        public string AfterImageUrl { get; set; }

        public int FurnitureTypeId { get; set; }
        public int MaterialTypeId { get; set; }
    }
}