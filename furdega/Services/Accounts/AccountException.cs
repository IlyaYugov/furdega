using System;

namespace Furdega.Services.Accounts
{
    public class AccountException: Exception
    {
        public AccountException(string message) : base(message)
        {
        }
    }
}