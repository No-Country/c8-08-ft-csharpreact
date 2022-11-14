using Microsoft.EntityFrameworkCore;

namespace Persistencia.DataAcces
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options):base(options)
        {

        }
    }
}