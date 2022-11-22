namespace WebApiFood.Entities
{
    public class Location
    {
        public int Id { get; set; }
        public string Dpart { get; set; }
        public string Mund { get; set; }
        public Busines Business { get; set; }
    }
}
