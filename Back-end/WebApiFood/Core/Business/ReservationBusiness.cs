using AutoMapper;
using WebApiFood.Core.Interfaces;
using WebApiFood.Core.Models.Dtos;
using WebApiFood.Core.Models.Dtos.ReservationDtos;
using WebApiFood.Entities;
using WebApiFood.Repositories;
using WebApiFood.Repositories.Interfaces;

namespace WebApiFood.Core.Business
{
    public class ReservationBusiness : IResevationBusiness
    {
        private readonly IUnitOfWork _Repository;
        private readonly IMapper _mapper;
        private readonly IReservationRepository _reservationRepository;
        public ReservationBusiness(IUnitOfWork repository, IMapper mapper, IReservationRepository reservationRepository)
        {
            _Repository = repository;
            _mapper = mapper;
            _reservationRepository = reservationRepository;
        }

        public async Task<Response<bool>> Create(ReservationDto reservationDto)
        {
            Response<bool> response = new Response<bool>();
            try
            {
                Reservation reservation = _mapper.Map<Reservation>(reservationDto);
                await _Repository.ReservationRepository.Insert(reservation);
                var code = await _Repository.ReservationRepository.Save();
                if (code>=1)
                {
                    response.Data = true;
                    response.IsSucces = true;
                    response.Message = "consulta Exitosa";
                }
                else
                {
                    response.Data = false;
                    response.IsSucces = false;
                    response.Message = "problema en la consulta!";
                }
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
            }
            return response;
        }

        public async Task<Response<ICollection<GetResCustomerDto>>> GetAllByCustomerId(int idCustomer)
        {
            Response<ICollection<GetResCustomerDto>> response = new ();
            try
            {
                ICollection<Reservation> reservation = await _reservationRepository.GetByCustomer(idCustomer);
                response.Data = _mapper.Map<ICollection<GetResCustomerDto>>(reservation);
                if (response.Data !=null)
                {
                    response.IsSucces = true;
                    response.Message = "Consulta Exitosa";
                }
            }
            catch (Exception ex)
            {
                response.Message=ex.Message;
            }
            return response;
        }

        public async Task<Response<ICollection<GetResSellerDto>>> GetAllBySellerId(int idSeller)
        {
            Response<ICollection<GetResSellerDto>> response = new();
            try
            {
                ICollection<Reservation> reservation = await _reservationRepository.GetBySeller(idSeller);
                response.Data = _mapper.Map<ICollection<GetResSellerDto>>(reservation);
                if (response.Data != null)
                {
                    response.IsSucces = true;
                    response.Message = "Consulta Exitosa";
                }
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
            }
            return response;
        }
    }
}
