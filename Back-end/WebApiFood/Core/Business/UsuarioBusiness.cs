using AutoMapper;
using WebApiFood.Core.Interfaces;
using WebApiFood.Core.Models.Dtos;
using WebApiFood.Entities;
using WebApiFood.HandlerArch;
using WebApiFood.Repositories;
using WebApiFood.Repositories.Interfaces;

namespace WebApiFood.Core.Business
{
    public class UsuarioBusiness : IUsuarioBusiness
    {
        private readonly IUnitOfWork _Repository;
        private readonly IMapper _mapper;
        private readonly IHandlerArch _archivo;
        public UsuarioBusiness(IUnitOfWork repository,IMapper mapper,IHandlerArch archivo)
        {
            _Repository = repository;
            _mapper = mapper;
         
            _archivo = archivo;
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
    }
}
