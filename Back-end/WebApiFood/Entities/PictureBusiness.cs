namespace WebApiFood.Entities
{
    public class PictureBusiness
    {
        public int Id { get; set; }
        public string UrlImg { get; set; }
        public int BusinessId { get; set; }
        public Busines Business { get; set; }
    }
}
