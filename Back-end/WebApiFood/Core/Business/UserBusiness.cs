using AutoMapper;
using WebApiFood.Core.Interfaces;
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

        public Task<User> GetById(int id)
        {
            throw new NotImplementedException();
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
