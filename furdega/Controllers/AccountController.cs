using System.Threading.Tasks;
using Furdega.Services.Accounts;
using Furdega.Services.Accounts.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Furdega.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountService _accountService;

        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }

        [HttpPost("Token")]
        public async Task<string> Token(GetTokenRequest request)
        {
            return await _accountService.GetToken(request);
        }

        [Authorize]
        [HttpPost("ChangePassword")]
        public async Task<string> ChangePassword(ChangePasswordRequest request)
        {
            return await _accountService.ChangePassword(request);
        }

        [Authorize]
        [HttpGet("IsAuthorize")]
        public void IsAuthorize()
        {
        }
    }
}
