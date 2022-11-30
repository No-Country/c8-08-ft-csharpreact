using WebApiFood.Entities;
namespace WebApiFood.Repositories.Interfaces
{
    public interface IPictureDishRepository
    {
        Task<ICollection<PictureDish>> GetPictureDishById(int idEntity);
        Task<bool> DeletePictureDishById(int idEntity);
    }
}
