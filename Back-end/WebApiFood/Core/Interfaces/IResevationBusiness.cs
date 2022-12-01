using WebApiFood.Core.Models.Dtos;
using WebApiFood.Core.Models.Dtos.ReservationDtos;
using WebApiFood.Repositories;

namespace WebApiFood.Core.Interfaces
{
    public interface IResevationBusiness
    {
        Task<Response<bool>> Create(ReservationDto reservationDto);
        Task<Response<ICollection<GetResCustomerDto>>> GetAllByCustomerId(int idCustomer);
        Task<Response<ICollection<GetResSellerDto>>> GetAllBySellerId(int idCustomer);

    }
}
