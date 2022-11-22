using WebApiFood.Entities;

namespace WebApiFood.Core.Models.Dtos
{
    public class RgBusinessDto
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string Dpart { get; set; }
        public string Mund { get; set; }
        public string Adress { get; set; }
        public int SellerId { get; set; }
        public List<IFormFile> Img { get; set; }
        
    }
}
