using WebApiFood.Entities;

namespace WebApiFood.Core.Models.Dtos.BusinesDtos
{
    public class ListaBusinesDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int SellerId { get; set; }
        public string Dpart { get; set; }
        public string Mund { get; set; }
        public string Adress { get; set; }
        public ICollection<ScoreBusinesDto> ScoreBusinesses { get; set; }
        public ICollection<PictureBusinesDto> PictureBusinesses { get; set; }


    }
}
