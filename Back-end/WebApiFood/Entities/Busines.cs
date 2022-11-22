namespace WebApiFood.Entities
{
    public class Busines
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int SellerId { get; set; }
        public string Dpart { get; set; }
        public string Mund { get; set; }
        public string Adress { get; set; }
        public ICollection<Dish> Dishes { get; set; }
        public ICollection<Reservation> Reservations { get; set; }
        public ICollection<ScoreBusiness> ScoreBusinesses { get; set; }
        public ICollection<PictureBusiness> PictureBusinesses { get; set; }
        public Seller Seller { get; set; }


    }
}
