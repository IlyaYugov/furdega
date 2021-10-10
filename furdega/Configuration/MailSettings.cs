namespace Furdega.Configuration
{
    public class MailSettings
    {
        public string SmtpServer { get; set; }
        public int Port { get; set; }

        public string FromMailAddress { get; set; }
        public string FromMailPassword { get; set; }
        public string FromMailDisplayName { get; set; }
        public string ToMailAddress { get; set; }
    }
}