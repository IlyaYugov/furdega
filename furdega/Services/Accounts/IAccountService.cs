using System.Threading.Tasks;
using Furdega.Services.Accounts.Dtos;

namespace Furdega.Services.Accounts
{
    public interface IAccountService
    {
        Task<string> GetToken(GetTokenRequest request);

        Task<string> ChangePassword(ChangePasswordRequest request);
    }
}