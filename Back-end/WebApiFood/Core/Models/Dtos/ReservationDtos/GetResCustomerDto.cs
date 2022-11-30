namespace WebApiFood.Core.Models.Dtos.ReservationDtos
{
    //GetResevationByCustomerDto
    public class GetResCustomerDto
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public DateTime Fecha { get; set; }
        public string Hora { get; set; }
        public bool Confirmed { get; set; }
        public int CustomerId { get; set; }
    }
}
