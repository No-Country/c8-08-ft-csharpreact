namespace WebApiFood.Entities
{
    public class ScoreBusiness
    {
        public int Id { get; set; }
        public int Score { get; set; }
        public int BusinessId { get; set; }
        public Busines Business { get; set; }
    }
}
