using WebApiFood.Core.Models.Dtos;
using WebApiFood.Repositories;

namespace WebApiFood.Core.Interfaces
{
    public interface IScoreDishBusiness
    {
        Task<Response<bool>> Create(ScoreDishDto scoreDishDto);
    }
}
