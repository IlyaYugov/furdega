using System;
using System.Threading.Tasks;
using Furdega.Services.Accounts;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;

namespace Furdega.Middleware
{
    public class ExceptionMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<ExceptionMiddleware> _logger;

        public ExceptionMiddleware(RequestDelegate next, ILogger<ExceptionMiddleware> logger)
        {
            _next = next ?? throw new ArgumentNullException(nameof(next));
            _logger = logger;
        }

        public async Task Invoke(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (AccountException ex)
            {
                _logger.LogError(ex, ex.Message);
                await SendResponse(context, StatusCodes.Status401Unauthorized, ex.Message);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, ex.Message);
                await SendResponse(context, StatusCodes.Status500InternalServerError, "Internal server error");
            }
        }

        private async Task SendResponse(HttpContext context, int statusCode, string message)
        {
            context.Response.StatusCode = statusCode;
            context.Response.ContentType = "text/plain";

            await context.Response.WriteAsync(message);
        }
    }
}
