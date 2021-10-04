using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Threading.Tasks;
using Furdega.Configuration;
using Furdega.DataAccess.Models;
using Furdega.Repositories.RepositoryBase;
using Furdega.Services.Accounts.Dtos;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace Furdega.Services.Accounts
{
    public class AccountService : IAccountService
    {
        private readonly AuthOptions _authOptions;

        private readonly IRepositoryBase<User> _userRepository;

        public AccountService(IOptions<AuthOptions> authOptions, IRepositoryBase<User> userRepository)
        {
            _userRepository = userRepository;
            _authOptions = authOptions.Value;
        }

        public async Task<string> GetToken(GetTokenRequest request)
        {
            var user = await _userRepository.FirstOrDefault(u => u.Login == request.Login && u.Password == request.Password);
            if (user == null)
               return "Invalid login or password";

            return GetIdentity(user);
        }
        
        public async Task<string> ChangePassword(ChangePasswordRequest request)
        {
            var user = await _userRepository.FirstOrDefault(u => u.Login == request.Login && u.Password == request.OldPassword);
            if (user == null)
                return "Invalid login or password";

            user.Password = request.NewPassword;

            await _userRepository.Update(user);

            return GetIdentity(user);
        }

        private string GetIdentity(User user)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimsIdentity.DefaultNameClaimType, user.Login),
                new Claim(AuthOptions.Password, user.Password),
                new Claim(AuthOptions.Id, user.Id.ToString()),
            };
            ClaimsIdentity claimsIdentity =
                new ClaimsIdentity(claims, "Token", ClaimsIdentity.DefaultNameClaimType,
                    ClaimsIdentity.DefaultRoleClaimType);

            var now = DateTime.UtcNow;

            // create JWT-token
            var jwt = new JwtSecurityToken(
                issuer: _authOptions.Issuer,
                audience: _authOptions.Audience,
                notBefore: now,
                claims: claimsIdentity.Claims,
                expires: now.Add(TimeSpan.FromMinutes(_authOptions.Lifetime)),
                signingCredentials: new SigningCredentials(_authOptions.GetSymmetricSecurityKey(),
                    SecurityAlgorithms.HmacSha256));
            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

            return encodedJwt;
        }
    }
}