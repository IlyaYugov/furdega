using Furdega.Services.FileManagers;

namespace Furdega.Services.Furnitures.Dtos.Output
{
    public class FurnitureResponse
    {
        public int Id { get; set; }
        public ImageResponse BeforeImage { get; set; }
        public ImageResponse AfterImage { get; set; }
        public int FurnitureTypeId { get; set; }
        public int MaterialTypeId { get; set; }
    }
}