﻿namespace WebApiFood.Entities
{
    public class Reservation
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public DateTime Fecha { get; set; }
        public string Hora { get; set; }
        public bool Confirmed { get; set; }
        public int BusinessId { get; set; }
        public int CustomerId { get; set; }
        public Busines Business { get; set; }
        public Customer Customer { get; set; }
    }
}
