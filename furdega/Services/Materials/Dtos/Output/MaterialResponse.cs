using Furdega.Services.FileManagers;

namespace Furdega.Services.Materials.Dtos.Output
{
    public class MaterialResponse
    {
        public int Id { get; set; }
        public string Title { get; set; }

        public ImageResponse MainImage { get; set; }
        public ImageResponse PreviewImage { get; set; }
    }
}