using System;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using Furdega.Configuration;
using Furdega.Services.MailSenders.Dtos.Input;
using Microsoft.Extensions.Options;
using MimeKit;
using SmtpClient = MailKit.Net.Smtp.SmtpClient;

namespace Furdega.Services.MailSenders
{
    public class MailSender: IMailSender
    {
        private readonly MailSettings _mailSettings;

        private readonly MailboxAddress _fromMailAddress;
        private readonly MailboxAddress _tomMailAddress;

        public MailSender(IOptions<MailSettings> mailSettings)
        {
            _mailSettings = mailSettings.Value;

            _fromMailAddress = new MailboxAddress(_mailSettings.FromMailAddress);
            _tomMailAddress = new MailboxAddress(_mailSettings.ToMailAddress);
        }

        private MimeMessage CreateEmailMessage(DesignerArrivalMessage message)
        {
            var emailMessage = new MimeMessage();
            emailMessage.From.Add(_fromMailAddress);
            emailMessage.To.Add(_fromMailAddress);
            emailMessage.Subject = "Выезд Дизайнера";
            emailMessage.Body = new TextPart(MimeKit.Text.TextFormat.Text)
            {
                Text =
 @$"<h3><b>Имя</b></h3>
	{message.SenderName}
	<h3><b>Телефон</b></h3>
	{message.PhoneNumber}
	<h3><b>Время звонка</b></h3>
	{message.TimeInterval}
	<h3><b>Дата обращения</b></h3>
	{DateTime.Now:dd.MM.yyyy}"
        };
            return emailMessage;
        }

        public async Task SendDesignerArrivalMessage(DesignerArrivalMessage message)
        {
            var mailMessage = CreateEmailMessage(message);

            using (var client = new SmtpClient())
            {
                try
                {
                    client.Connect(_mailSettings.SmtpServer, _mailSettings.Port, true);
                    client.AuthenticationMechanisms.Remove("XOAUTH2");
                    client.Authenticate(_mailSettings.FromMailAddress, _mailSettings.FromMailPassword);
                    await client.SendAsync(mailMessage);
                }
                finally
                {
                    client.Disconnect(true);
                    client.Dispose();
                }
            }
        }
    }
}