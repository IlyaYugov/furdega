using System;
using System.Linq;

namespace Furdega.Services.FileManagers
{
    public class Image
    {
        public const string FileFormatError = "Not Supported image format";
        private static readonly string[] AvailableImageExtensions = { ".jpg", ".png", ".gif", ".mp4" };

        public Guid Id { get; set; }
        public string Base64ImageString { get; set; }

        public string GetImageExtension()
        {
            var extensionCode = Base64ImageString?.Substring(0, 5).ToUpper();

            switch (extensionCode)
            {
                case "IVBOR":
                    return ".png";
                case "/9J/4":
                    return ".jpg";
                case "R0lGO":
                    return ".gif";
                case "AAAAF":
                    return ".mp4";
                default:
                    return string.Empty;
            }
        }

        public bool IsFileExtensionCorrect()
            => AvailableImageExtensions.Any(ex => GetImageExtension().Equals(ex, StringComparison.OrdinalIgnoreCase));

        public string GetImageName => string.Concat(Id.ToString(), GetImageExtension());
    }
}