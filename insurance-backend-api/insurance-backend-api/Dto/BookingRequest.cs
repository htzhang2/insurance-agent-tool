namespace insurance_backend_api.Dto
{
    public class BookingRequest
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string AppointmentDate { get; set; }
        public string AppointmentTime { get; set; }
        public string TimeZone { get; set; } = "America/Los_Angeles";
    }
}
