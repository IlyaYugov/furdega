using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace Furdega.Configuration
{
    public class AuthOptions
    {
        public const string Id = "id";
        public const string Password = "password";

        public string Issuer { get; set; } // издатель токена
        public string Audience  { get; set; } // потребитель токена
        public string Key  { get; set; }   // ключ для шифрации
        public int Lifetime { get; set; } // время жизни токена - 1 минута

        public SecurityKey GetSymmetricSecurityKey()
        {
            return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(Key));
        }
    }
}