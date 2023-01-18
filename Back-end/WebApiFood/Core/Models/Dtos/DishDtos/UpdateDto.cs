namespace WebApiFood.Core.Models.Dtos.DishDtos
{
    public class UpdateDto
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public float Prece { get; set; }
        public int BusinessId { get; set; }
        public List<IFormFile> img { get; set; } = new List<IFormFile>();
    }
}
