namespace insurance_backend_api.Services
{
    using Ical.Net;
    using Ical.Net.CalendarComponents;
    using Ical.Net.DataTypes;
    using Ical.Net.Serialization;
    using MailKit.Net.Smtp;
    using MailKit.Security;
    using MimeKit;

    public class CalendarMailService : ICalendarMailService
    {
        private readonly IConfiguration _config;
        private readonly string _gmailAgentName;
        private readonly string _gmailAgentEmail;
        private readonly string _gmailSmtpServer;
        private readonly string _gmailApiPassword;
        private readonly int _gmailSmtpPort;
        private readonly string _gmailTimeZone;

        public CalendarMailService(IConfiguration config)
        {
            _config = config;

            _gmailAgentName = _config.GetValue<string>("Google:AgentName");
            _gmailAgentEmail = _config.GetValue<string>("Google:AgentEmail");
            _gmailSmtpServer = _config.GetValue<string>("Google:SmtpServer");
            _gmailApiPassword = _config.GetValue<string>("Google:ApiPassword");
            _gmailSmtpPort = _config.GetValue<int>("Google:SmtpPort");
            _gmailTimeZone = _config.GetValue<string>("Google:TimeZone");
        }

        public async Task SendInviteAsync(
            string fromName,
            string fromEmail,
            DateTime appointmentDateTime)
        {
            var icsContent = GenerateCalendarInvite(
                fromName,
                fromEmail,
                appointmentDateTime);

            var message = new MimeMessage();
            
            message.From.Add(new MailboxAddress(fromName, fromEmail));
            message.To.Add(new MailboxAddress(_gmailAgentName, _gmailAgentEmail));
            message.ReplyTo.Add(new MailboxAddress(fromName, fromEmail));
            
            message.Subject = "Insurance Consultation Appointment";

            var builder = new BodyBuilder
            {
                TextBody = $"Please find attached calendar invitation from {fromEmail}"
            };

            builder.Attachments.Add("invite.ics",
                System.Text.Encoding.UTF8.GetBytes(icsContent),
                new ContentType("text", "calendar"));

            message.Body = builder.ToMessageBody();

            using var client = new SmtpClient();

            // Local fix for SSL issues in development - should be removed in production
            // client.ServerCertificateValidationCallback = (s, c, h, e) => true;
            client.CheckCertificateRevocation = false;

            //TODO: get from configuration
            await client.ConnectAsync(
                _gmailSmtpServer,
                _gmailSmtpPort,
                SecureSocketOptions.StartTls);

            await client.AuthenticateAsync(_gmailAgentEmail, _gmailApiPassword);

            await client.SendAsync(message);
            await client.DisconnectAsync(true);
        }

        public string GenerateCalendarInvite(
            string fromName,
            string fromEmail,
            DateTime appointmentDateTime)
        {
            var calendar = new Calendar();

            var e = new CalendarEvent
            {
                Summary = "Insurance Consultation",
                Description = $"Meeting with {fromName}",
                Start = new CalDateTime(appointmentDateTime, _gmailTimeZone),
                End = new CalDateTime(appointmentDateTime.AddHours(1), _gmailTimeZone),
                Uid = Guid.NewGuid().ToString(),
                Sequence = 0,
                Created = new CalDateTime(DateTime.UtcNow)
            };

            e.Attendees.Add(new Attendee($"mailto:{fromEmail}"));

            calendar.Events.Add(e);

            var serializer = new CalendarSerializer();
            return serializer.SerializeToString(calendar);
        }

    }
}
