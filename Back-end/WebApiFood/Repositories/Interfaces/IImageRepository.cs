using WebApiFood.Entities;

namespace WebApiFood.Repositories.Interfaces
{
    public interface IImageRepository
    {
        Task<PictureDish> GetPictureDishId(int id);
        Task<PictureBusiness> GetPictureBusinesId(int id);
    }
}
