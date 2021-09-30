using System.Threading.Tasks;

namespace Furdega.Services.FileManagers
{
    public interface IFileManager
    {
        Task<string> LoadFile(string file);
    }
}