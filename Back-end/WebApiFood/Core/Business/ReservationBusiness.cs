using AutoMapper;
using WebApiFood.Core.Interfaces;
using WebApiFood.Core.Models.Dtos;
using WebApiFood.Entities;
using WebApiFood.Repositories;
using WebApiFood.Repositories.Interfaces;

namespace WebApiFood.Core.Business
{
    public class ReservationBusiness : IResevationBusiness
    {
        private readonly IUnitOfWork _Repository;
        private readonly IMapper _mapper;
        public ReservationBusiness(IUnitOfWork repository, IMapper mapper)
        {
            _Repository = repository;
            _mapper = mapper;
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
    }
}
