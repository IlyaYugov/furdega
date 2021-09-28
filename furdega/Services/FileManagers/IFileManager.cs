using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace Furdega.Services.FileManagers
{
    public interface IFileManager
    {
        Task<string> LoadFile(IFormFile file);
    }
}