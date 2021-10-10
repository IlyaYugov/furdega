using System.Threading.Tasks;
using Furdega.Services.MailSenders.Dtos.Input;

namespace Furdega.Services.MailSenders
{
    public interface IMailSender
    {
        Task SendDesignerArrivalMessage(DesignerArrivalMessage message);
    }
}