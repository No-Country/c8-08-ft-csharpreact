using AutoMapper;
using WebApiFood.Core.Helpers;
using WebApiFood.Core.Interfaces;
using WebApiFood.Core.Models.Dtos;
using WebApiFood.Entities;
using WebApiFood.HandlerArch;
using WebApiFood.Repositories;
using WebApiFood.Repositories.Interfaces;

namespace WebApiFood.Core.Business
{
    public class CustomerBusiness : ICustomerBusiness
    {
        private readonly IUnitOfWork _Repository;
        private readonly IMapper _mapper;
        private readonly IHandlerArch _archivo;
        private readonly IUserRepository _userRepository;
        private readonly IConfiguration _configuration;
        public CustomerBusiness(IUnitOfWork repository,IMapper mapper, IHandlerArch archivo, IUserRepository userRepository, IConfiguration configuration)
        {
            _Repository = repository;
            _mapper = mapper;
            _archivo = archivo;
            _userRepository = userRepository;
            _configuration = configuration;
        }

        public Task<IEnumerable<User>> GetAll()
        {
            throw new NotImplementedException();
        }

        public Task<User> GetById(int id)
        {
            throw new NotImplementedException();
        }
        public async Task<Response<bool>> Create(RgCustomerDto rgCustomerDto)
        {
            Response<bool> response = new();
            try
            {
                var usuarioDto = _mapper.Map<UserDto>(rgCustomerDto);
                usuarioDto.Create = DateTime.UtcNow;
                usuarioDto.Update = DateTime.UtcNow;
                usuarioDto.RoleId = 2;
                var user = _mapper.Map<User>(usuarioDto);

              
                var customerDto = _mapper.Map<CustomerDto>(rgCustomerDto);
                var url = await _archivo.GuardarImagen(rgCustomerDto.UrlPhoto, "User");
                customerDto.UrlPhoto = url;
              
                Customer customer = _mapper.Map<Customer>(customerDto);
                user.customer = customer;
                
                await _Repository.UserRepository.Insert(user);
                var code = await _Repository.CustomerRepository.Save();
                if (code >= 1)
                {
                    response.Data = true;
                    response.Message = "consulta exitosa!";
                    response.IsSucces = true;
                }
                else
                {
                    response.Data = false;
                    response.IsSucces = false;
                    response.Message = "Problemas al insertar el registro!";
                }

                return response;
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
            }
            return response;
        }

        public Task<bool> Update(User Entity)
        {
            throw new NotImplementedException();
        }
        public Task<bool> Delete(User Entity)
        {
            throw new NotImplementedException();
        }

        public async Task<Response<string>> loginUser(LoginDto userDto)
        {
            Response<string> response = new Response<string>();
            try
            {
                var user = await _userRepository.GetByName(userDto.Email);
                if (user ==null)
                {
                    response.IsSucces=false;
                    response.Message = "no se encontro el usuario!";
                }
                else
                {
                    if(user.Password == userDto.Password)
                    {
                        response.Data = TokenJwt.CrearToken(user, _configuration);
                        response.IsSucces = true;
                        response.Message = "login exitoso!!";
                    }
                    else
                    {
                        response.IsSucces = false;
                        response.Message = "Contraseña Incorrecta!!";
                    }
                    
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
