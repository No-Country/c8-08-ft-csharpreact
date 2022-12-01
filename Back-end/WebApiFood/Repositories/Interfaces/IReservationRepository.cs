using WebApiFood.Entities;

namespace WebApiFood.Repositories.Interfaces
{
    public interface IReservationRepository
    {
        Task<ICollection<Reservation>> GetByCustomer(int idCustomer);
        Task<ICollection<Reservation>> GetBySeller(int idSeller);
    }
}
