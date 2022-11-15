using Microsoft.EntityFrameworkCore;

namespace WebApiFood.DataAcces
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options):base(options)
        {

        }
    }
}
