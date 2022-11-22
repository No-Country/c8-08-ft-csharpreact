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
        public async Task<Busines> GetById(int id)
        {
            return await _contex.Businesses.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<Busines> GetByName(string name)
        {
            return await _contex.Businesses.FirstOrDefaultAsync(x => x.Name == name);
        }
    }
}
