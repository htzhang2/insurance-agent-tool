using insurance_backend_api.Dto;
using insurance_backend_api.Services;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace insurance_backend_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class InsuranceApiController : ControllerBase
    {
        private readonly ILogger<InsuranceApiController> _logger;
        private readonly ICalendarMailService _bookingService;

        public InsuranceApiController(
            ILogger<InsuranceApiController> logger,
            ICalendarMailService bookingService)
        {
            _logger = logger;
            _bookingService = bookingService;
        }

        [HttpPost("api/booking")]
        public async Task<IActionResult> BookAppointment([FromBody] BookingRequest request)
        {
            await _bookingService.SendInviteAsync(
                request.FromName,
                request.FromEmail,
                request.AppointmentDateTime);

            return Ok(new { Message = "Appointment booked successfully!" });
        }
    }
}
