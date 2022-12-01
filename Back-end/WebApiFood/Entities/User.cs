namespace WebApiFood.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public bool Activo { get; set; } = true;
        public DateTime Create { get; set; }
        public DateTime Update { get; set; }
        public int RoleId { get; set; }
        public Role Role { get; set; }
        public Seller Seller { get; set; }
        public Customer customer { get; set; }
    }
}
