using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace Furdega.Configuration
{
    public class AuthOptions
    {
        public const string Id = "id";
        public const string Password = "password";

        public string Issuer { get; set; }
        public string Audience  { get; set; }
        public string Key  { get; set; }
        public int Lifetime { get; set; }

        public SecurityKey GetSymmetricSecurityKey()
        {
            return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(Key));
        }
    }
}