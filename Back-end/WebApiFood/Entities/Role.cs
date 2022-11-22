namespace WebApiFood.Entities
{
    public class Role
    {
        public int Id { get; set; }
        public string NameRole { get; set; }
        public User User { get; set; }
    }
}
