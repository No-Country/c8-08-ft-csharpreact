using Microsoft.EntityFrameworkCore;
using WebApiFood.DataAcces;
using WebApiFood.Entities;
using WebApiFood.Repositories.Interfaces;

namespace WebApiFood.Repositories
{
    public class ReservationRepository : IReservationRepository
    {
        private readonly AppDbContext _context;
        public ReservationRepository(AppDbContext context)
        {
            _context = context;
        }
        /// <summary>
        /// retorna todos las reservaciones del un cliente
        /// </summary>
        /// <param name="idCustomer"></param>
        /// <returns></returns>
        public async Task<ICollection<Reservation>> GetByCustomer(int idCustomer)
        {
            ICollection<Reservation> reservation = await _context.Reservations.Where(x => x.CustomerId == idCustomer).ToListAsync();
            return reservation;
        }

        /// <summary>
        /// Retorna todas las reservaciones de un negocio
        /// </summary>
        /// <param name="idSeller"></param>
        /// <returns></returns>
        public async Task<ICollection<Reservation>> GetBySeller(int idSeller)
        {
            ICollection<Reservation> reservation = await _context.Reservations.Include(y=>y.Business).Where(x => x.Business.SellerId == idSeller).ToListAsync();
            return reservation;
        }
    }
}
