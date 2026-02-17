
namespace insurance_backend_api.Services
{
    public interface ICalendarMailService
    {
        string GenerateCalendarInvite(string fromName, string fromEmail, DateTime appointmentDateTime);
        Task SendInviteAsync(string fromName, string fromEmail, DateTime appointmentDateTime);
    }
}