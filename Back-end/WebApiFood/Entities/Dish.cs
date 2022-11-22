namespace WebApiFood.Entities
{
    public class Dish
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public float Prece { get; set; }
        public int BusinessId { get; set; }
        public Busines Business { get; set; }
        public ICollection<Comment> Comments { get; set; }
        public ICollection<ScoreDish> ScoreDish { get; set; }
        public ICollection<PictureDish> PictureDishes { get; set; }
    }
}
