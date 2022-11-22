using WebApiFood.Core.Models.Dtos;
using WebApiFood.Repositories;

namespace WebApiFood.Core.Interfaces
{
    public interface IResevationBusiness
    {
        Task<Response<bool>> Create(ReservationDto reservationDto);
    }
}
