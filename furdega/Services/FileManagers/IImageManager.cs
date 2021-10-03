using System.Threading.Tasks;

namespace Furdega.Services.FileManagers
{
    public interface IImageManager
    {
        Task<ImageResponse> LoadImage(Image image);
    }
}