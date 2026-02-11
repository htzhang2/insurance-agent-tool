using insurance_backend_api.Dto;
using Microsoft.AspNetCore.Mvc;

namespace insurance_backend_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class InsuranceApiController : ControllerBase
    {
        private readonly ILogger<InsuranceApiController> _logger;

        public InsuranceApiController(ILogger<InsuranceApiController> logger)
        {
            _logger = logger;
        }

        [HttpPost("api/booking")]
        public IActionResult BookAppointment([FromBody] BookingRequest request)
        {
            return Ok(new { Message = "Appointment booked successfully!" });
        }
    }
}
