using AutoMapper;
using WebApiFood.Core.Interfaces;
using WebApiFood.Core.Models.Dtos;
using WebApiFood.Core.Models.Dtos.UserDtos;
using WebApiFood.Entities;
using WebApiFood.Repositories;
using WebApiFood.Repositories.Interfaces;

namespace WebApiFood.Core.Business
{
    public class UserBusiness : IUserBusiness
    {
        private readonly IUserRepository _userRespository;
        private readonly IMapper _mapper;
        public UserBusiness(IUserRepository userRespository,IMapper mapper)
        {
            _userRespository = userRespository;
            _mapper = mapper;
        }

        public async Task<Response<User>> GetById(int id)
        {
            Response<User> response = new Response<User>();
            try
            {
                User user = await _userRespository.GetById(id);
                if (user == null)
                {
                    response.IsSucces= false;
                    response.Data = null;
                    response.Message = "No se encontraron Registros!!";
                }
                else
                {
                    response.IsSucces= true;
                    response.Data = user;
                }
            }
            catch (Exception ex )
            {
                response.Message= ex.Message;
            }
           return response;
           
        }

        public async Task<Response<CustomerDto>> GetByIdCustomer(int id)
        {
            Response<CustomerDto> response = new Response<CustomerDto>();
            try
            {
                Customer customer = await _userRespository.GetByIdCustomer(id);
                response.Data = _mapper.Map<CustomerDto>(customer);
                if(response.Data != null)
                {
                    response.IsSucces = true;
                    response.Message = "consulta exitosa";
                }
                else
                {
                    response.IsSucces = false;
                    response.Message = "problemas en la consulta";
                }
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
            }
            return response;
        }

        public async Task<Response<SellerDto>> GetByIdSeller(int id)
        {
            Response<SellerDto> response = new Response<SellerDto>();
            try
            {
                Seller seller = await _userRespository.GetByIdSeller(id);
                response.Data = _mapper.Map<SellerDto>(seller);
                if (response.Data != null)
                {
                    response.IsSucces = true;
                    response.Message = "consulta exitosa";
                }
                else
                {
                    response.IsSucces = false;
                    response.Message = "problemas en la consulta";
                }
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
            }
            return response;
        }

        public Task<User> GetByName(string name)
        {
            throw new NotImplementedException();
        }
        /// <summary>
        /// Obtener todos los usuarios como cliente y vendedor
        /// </summary>
        /// <returns></returns>
        public async Task<Response<ICollection<GetUserDto>>> GetUsers()
        {
            Response<ICollection<GetUserDto>> response = new Response<ICollection<GetUserDto>>();
            try
            {
               var user  = await _userRespository.GetUsers();
                var users = _mapper.Map<ICollection<GetUserDto>>(user);
                response.Data = users;
                if(response.Data != null)
                {
                    response.IsSucces = true;
                    response.Message = "consulta exitosa!!";
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
