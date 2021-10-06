using System;
using System.Collections.Generic;
using Furdega.Repositories.RepositoryBase;

namespace Furdega.DataAccess.Models
{
    public class Material: BaseEntity
    {
        public string Title { get; set; }

        public Guid MainImageId { get; set; }
        public string MainImageUrl { get; set; }

        public Guid PreviewImageId { get; set; }
        public string PreviewImageUrl { get; set; }

        public List<MaterialBrand> MaterialBrands { get; set; }
    }
}