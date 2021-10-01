using System.Threading.Tasks;

namespace Furdega.Services.FileManagers
{
    public interface IImageManager
    {
        Task<string> LoadImage(Image image);
    }
}