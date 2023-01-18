namespace WebApiFood.Entities
{
    public class Comment
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public int DishId { get; set; }
        public int CustomerId { get; set; }
        public int UserId { get; set; }
        public DateTime Fecha { get; set; }
        public Dish Dish { get; set; }
        public Customer Customer { get; set; }
    }
}
