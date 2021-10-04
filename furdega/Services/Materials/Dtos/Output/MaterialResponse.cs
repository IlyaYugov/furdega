using Furdega.Services.FileManagers;

namespace Furdega.Services.Materials.Dtos.Output
{
    public class MaterialResponse
    {
        public int Id { get; set; }
        public string Title { get; set; }

        public ImageResponse Image { get; set; }

        public int MaterialTypeId { get; set; }
    }
}