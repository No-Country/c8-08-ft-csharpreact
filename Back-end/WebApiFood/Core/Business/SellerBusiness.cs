using AutoMapper;
using WebApiFood.Core.Interfaces;
using WebApiFood.Core.Models.Dtos;
using WebApiFood.Core.Models.Dtos.UserDtos;
using WebApiFood.Entities;
using WebApiFood.HandlerArch;
using WebApiFood.Repositories;
using WebApiFood.Repositories.Interfaces;

namespace WebApiFood.Core.Business
{
    public class SellerBusiness : ISellerBusiness
    {
        private readonly IUnitOfWork _Repository;
        private readonly IMapper _mapper;
        private readonly IUserRepository _userRepository;
        private readonly IHandlerArch _archivo;
        public SellerBusiness(IUnitOfWork repository, IMapper mapper, IUserRepository userRepository, IHandlerArch archivo)
        {
            _Repository = repository;
            _mapper = mapper;
            _userRepository = userRepository;
            _archivo = archivo;
        }
        public async Task<Response<bool>> Create(RgSellerDto rgsellerDto)
        {
            Response<bool> response = new Response<bool>();
            try
            {
                UserDto userDto = _mapper.Map<UserDto>(rgsellerDto);
                userDto.RoleId = 3;
                userDto.Create = DateTime.UtcNow;
                userDto.Update = DateTime.UtcNow;

                User user = _mapper.Map<User>(userDto);
               
                SellerDto sellerDto = _mapper.Map<SellerDto>(rgsellerDto);
                sellerDto.UrlPhoto = await _archivo.GuardarImagen(rgsellerDto.UrlPhoto, "seller");
                Seller seller = _mapper.Map<Seller>(sellerDto);
                user.Seller = seller;
                    
                await _Repository.UserRepository.Insert(user);
                var cod = await _Repository.UserRepository.Save();
                if (cod>=1)
                {
                    response.IsSucces = true;
                    response.Data = true;
                    response.Message = "consulta exitosa";
                }
                else
                {
                    response.IsSucces = false;
                    response.Data = false;
                    response.Message = "Problemas en la consulta";
                }
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
            }
            return response;
        }

        public Task<bool> Delete(User Entity)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<User>> GetAll()
        {
            throw new NotImplementedException();
        }

        public Task<User> GetById(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<Response<bool>> Update(UpdateSellerDto Entity, int iduser)
        {
            Response<bool> response = new Response<bool>();
            try
            {
                Seller sellersql = await _userRepository.GetByUserId(iduser);
                //Seller seller = _mapper.Map<Seller>(Entity);
                sellersql.UserName = Entity.UserName;
                sellersql.LastName = Entity.LastName;
                sellersql.Gender = Entity.Gender;
                sellersql.Phone = Entity.Phone;
                sellersql.Adress = Entity.Adress;
                sellersql.UserId = iduser;
                await _archivo.BorraArchivo(sellersql.UrlPhoto, "User");
                if (Entity.UrlPhoto != null)
                {
                    sellersql.UrlPhoto = await _archivo.GuardarImagen(Entity.UrlPhoto, "User");
                    
                }
                await _Repository.SellerRepository.Update(sellersql);
                int code = await _Repository.SellerRepository.Save();
                if (code >= 1)
                {
                    response.Data = true;
                    response.IsSucces = true;
                    response.Message = "Update Exitoso!!";
                }
                else
                {
                    response.Data = false;
                    response.IsSucces = false;
                    response.Message = "Problema con el Update!!";
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
