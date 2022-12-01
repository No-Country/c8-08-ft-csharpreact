namespace WebApiFood.Core.Models.Dtos.DishDtos
{
    public class GetDishDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public float Prece { get; set; }
        public int BusinessId { get; set; }
        public ICollection<ScoreDishDto> ScoreDish { get; set; }
        public ICollection<PictureDishDto> PictureDishes { get; set; }
    }
}
