namespace WebApiFood.Entities
{
    public class PictureDish
    {
        public int Id { get; set; }
        public int DishId { get; set; }
        public string UrlImg { get; set; }
        public Dish Dish { get; set; }
    }
}
