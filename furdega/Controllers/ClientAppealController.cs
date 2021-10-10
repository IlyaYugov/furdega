using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Furdega.Services.MailSenders;
using Furdega.Services.MailSenders.Dtos.Input;

namespace Furdega.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientAppealController : ControllerBase
    {
        private readonly IMailSender _mailSender;

        public ClientAppealController(IMailSender mailSender)
        {
            _mailSender = mailSender;
        }

        [HttpPost]
        public async Task SendDesignerArrivalMessage(DesignerArrivalMessage message)
        {
            await _mailSender.SendDesignerArrivalMessage(message);
        }
    }
}
