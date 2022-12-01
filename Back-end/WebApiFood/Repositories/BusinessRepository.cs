using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using WebApiFood.DataAcces;
using WebApiFood.Entities;
using WebApiFood.Repositories.Interfaces;

namespace WebApiFood.Repositories
{
    public class BusinessRepository : IBusinessRepository
    {
        private readonly AppDbContext _contex;
        public BusinessRepository(AppDbContext contex)
        {
            _contex = contex;
        }

        public async Task<ICollection<Busines>> GetAllAsyncBusiness()
        {
            var busines= await _contex.Businesses.Include(x=>x.PictureBusinesses)
                                            .Include(x=>x.ScoreBusinesses).ToListAsync();
            return busines;
        }

        public async Task<ICollection<Busines>> GetAllAsyncByUser(int id)
        {
            ICollection<Busines> business = await _contex.Businesses.Where(y => y.SellerId == id).ToListAsync();
            return business;
        }

        public  async Task<ICollection<Busines>> GetBusinesByPagination()
        {
            ICollection<Busines> dd = new List<Busines>();
            int PageNumber = 1;
            int PageSize = 3;
            string sql = "BusinessWithPagination @PageNumber, @PageSize";
         
            var  d =  await _contex.Businesses.FromSqlRaw($"BusinessWithPagination {PageNumber}, {PageSize}").ToListAsync();
            return  dd;
        }

        public async Task<Busines> GetById(int id)
        {
            return await _contex.Businesses.FirstOrDefaultAsync(x => x.Id == id);
        }

        public  Task<Busines> GetByIdUser(int idUser)
        {
            Busines busine = (Busines) _contex.Businesses.Include(x=>x.PictureBusinesses).Include(y=>y.Dishes);
            return Task.FromResult(busine);
        }

        public async Task<Busines> GetByName(string name)
        {
            return await _contex.Businesses.FirstOrDefaultAsync(x => x.Name == name);
        }
    }
}
