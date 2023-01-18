using WebApiFood.Core.Models.Dtos;
using WebApiFood.Core.Models.Dtos.BusinesDtos;
using WebApiFood.Entities;
using WebApiFood.Repositories;

namespace WebApiFood.Core.Interfaces
{
    public interface IBusinesBusiness
    {
        Task<Response<bool>> Create(RgBusinessDto rgbusinesDto);
        Task<Response<bool>> Update(int idB , UpdateBusinesDto EntityDto);
        Task<Busines> GetByUserAsync(int idUser);
        Task<Response<IEnumerable<ListaBusinesDto>>> GetAllByUserAsync(int idUser);
        Task<Pagination<IEnumerable<ListaBusinesDto>>> GetAllBusinesAsync( int pageNumber,int pageSize);
        Task<Response<ListaBusinesDto>> GetById(int id);
        Task<Response<bool>> Delete(int idEntity);
    }
}
