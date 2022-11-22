namespace WebApiFood.Entities
{
    public class Seller
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public string Phone { get; set; }
        public string UrlPhoto { get; set; }
        public string Adress { get; set; }
        public int UserId { get; set; }
        public ICollection<Busines> Businesses { get; set; }
        public User User { get; set; }


    }
}
