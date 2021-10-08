using System;
using Furdega.Repositories.RepositoryBase;

namespace Furdega.DataAccess.Models
{
    public class MaterialBrand: BaseEntity
    {
        public string Title { get; set; }

        public int MaterialId { get; set; }

        public Guid MainImageId { get; set; }
        public string MainImageUrl { get; set; }

        public Guid PreviewImageId { get; set; }
        public string PreviewImageUrl { get; set; }

        //Array of ImageResponse into json - {Id, Url}
        public string Images { get; set; }
    }
}
