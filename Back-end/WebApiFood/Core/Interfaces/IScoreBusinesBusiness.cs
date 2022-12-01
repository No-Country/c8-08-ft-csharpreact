using WebApiFood.Core.Models.Dtos.BusinesDtos;
using WebApiFood.Repositories;

namespace WebApiFood.Core.Interfaces
{
    public interface IScoreBusinesBusiness
    {
        Task<Response<bool>> Create(ScoreBusinesDto scoreBusinesDto);
    }
}
