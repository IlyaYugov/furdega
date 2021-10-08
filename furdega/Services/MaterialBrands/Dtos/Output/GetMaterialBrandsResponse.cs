using Furdega.Services.FileManagers;

namespace Furdega.Services.MaterialBrands.Dtos.Output
{
    public class GetMaterialBrandsResponse
    {
        public int Id { get; set; }
        public string Title { get; set; }

        public ImageResponse PreviewImage { get; set; }
    }
}