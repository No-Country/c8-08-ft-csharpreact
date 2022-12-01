using Microsoft.EntityFrameworkCore;
using WebApiFood.Entities;
namespace WebApiFood.DataAcces
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options):base(options)
        {

        }
   
        public DbSet<Busines> Businesses { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Dish> Dishes { get; set; }
        public DbSet<PictureBusiness> PicturesBusiness { get; set; }
        public DbSet<PictureDish> PictureDishes { get; set; }
        public DbSet<Reservation> Reservations { get; set; }
        public DbSet<ScoreBusiness> ScoreBusiness { get; set; }
        public DbSet<ScoreDish> ScoreDishes { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Seller> Sellers { get; set; }
       


    }
}
