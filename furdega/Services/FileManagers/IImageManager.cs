using System.Threading.Tasks;

namespace Furdega.Services.FileManagers
{
    public interface IImageManager
    {
        Task<ImageResponse> UpdateImage(Image image, string oldImageUrl);
        Task<ImageResponse> CreateImage(Image image);
    }
}