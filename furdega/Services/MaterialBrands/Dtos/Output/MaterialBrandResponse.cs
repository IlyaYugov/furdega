using Furdega.Services.FileManagers;

namespace Furdega.Services.MaterialBrands.Dtos.Output
{
    public class MaterialBrandResponse
    {
        public int Id { get; set; }
        public string Title { get; set; }

        public int MaterialId { get; set; }

        public ImageResponse MainImage { get; set; }

        public ImageResponse[] Images { get; set; }
    }
}