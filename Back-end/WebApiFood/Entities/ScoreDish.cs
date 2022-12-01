namespace WebApiFood.Entities
{
    public class ScoreDish
    {
        public int Id { get; set; }
        public int Score { get; set; }
        public int DishId { get; set; }
        public Dish Dish { get; set; }
       
    }
}
