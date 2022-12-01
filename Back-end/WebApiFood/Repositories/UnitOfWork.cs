using WebApiFood.DataAcces;
using WebApiFood.Entities;
using WebApiFood.Repositories.Interfaces;

namespace WebApiFood.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly AppDbContext _context;
        public ICrudRepository<User> UserRepository { get; }
        public ICrudRepository<Customer> CustomerRepository { get; }
        public ICrudRepository<Seller> SellerRepository { get; }
        public ICrudRepository<Busines> BusinessRepository { get; }
        public ICrudRepository<PictureBusiness> PictureBusinessRepository { get; }
        public ICrudRepository<PictureDish> PictureDishRepository { get; }
        public ICrudRepository<Dish> DishRepository { get; }
        public ICrudRepository<Comment> CommentRepository { get; }
        public ICrudRepository<ScoreDish> ScoreDishRepository { get; }
        public ICrudRepository<ScoreBusiness> ScoreBusinesRepository { get; }
        public ICrudRepository<Reservation> ReservationRepository { get; }
        public UnitOfWork(AppDbContext context)
        {
            _context = context;
            UserRepository = new CrudRepository<User>(_context);
            CustomerRepository = new CrudRepository<Customer>(_context);
            SellerRepository = new CrudRepository<Seller>(_context);
            BusinessRepository = new CrudRepository<Busines>(_context);
            PictureBusinessRepository = new CrudRepository<PictureBusiness>(_context);
            PictureDishRepository = new CrudRepository<PictureDish>(_context);
            DishRepository = new CrudRepository<Dish>(_context);
            CommentRepository = new CrudRepository<Comment>(_context);
            ScoreDishRepository = new CrudRepository<ScoreDish>(_context);
            ScoreBusinesRepository = new CrudRepository<ScoreBusiness>(_context);
            ReservationRepository = new CrudRepository<Reservation>(_context);
        }

        public void Dispose()
        {
            System.GC.SuppressFinalize(this);
        }
    }
}
