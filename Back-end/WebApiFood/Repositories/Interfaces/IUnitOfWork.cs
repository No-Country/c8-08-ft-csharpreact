using WebApiFood.Entities;

namespace WebApiFood.Repositories.Interfaces
{
    public interface IUnitOfWork:IDisposable
    {
        public ICrudRepository<User> UserRepository { get; }
        public ICrudRepository<Customer> CustomerRepository { get; }
        public ICrudRepository<Seller> SellerRepository { get; }
        public ICrudRepository<Busines> BusinessRepository { get; }
        public ICrudRepository<PictureBusiness> PictureBusinessRepository { get; }
        public ICrudRepository<PictureDish> PictureDishRepository { get; }
        public ICrudRepository<Dish> DishRepository { get; }
        public ICrudRepository<Comment> CommentRepository { get; }
        public ICrudRepository<ScoreDish> ScoreDishRepository { get; }
        public ICrudRepository<Reservation> ReservationRepository { get; }
        public ICrudRepository<ScoreBusiness> ScoreBusinesRepository { get; }
    }
}
