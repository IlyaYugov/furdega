using Furdega.Services.FileManagers;

namespace Furdega.Services.Materials.Dtos.Output
{
    public class GetMaterialsResponse
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public ImageResponse PreviewImage { get; set; }
    }
}