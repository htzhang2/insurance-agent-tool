namespace insurance_backend_api.Dto
{
    public class BookingRequest
    {
        public string FromName { get; set; }
        public string FromEmail { get; set; }
        public DateTime AppointmentDateTime { get; set; }
    }
}
