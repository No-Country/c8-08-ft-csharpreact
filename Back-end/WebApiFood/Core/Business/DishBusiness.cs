using AutoMapper;
using WebApiFood.Core.Interfaces;
using WebApiFood.Core.Models.Dtos;
using WebApiFood.Entities;
using WebApiFood.HandlerArch;
using WebApiFood.Repositories;
using WebApiFood.Repositories.Interfaces;

namespace WebApiFood.Core.Business
{
    public class DishBusiness : IDishBusiness
    {
        private readonly IUnitOfWork _Repository;
        private readonly IMapper _mapper;
        private readonly IDishRepository _dishRepository;
        private readonly IHandlerArch _archivo;
        public DishBusiness(IUnitOfWork repository, IMapper mapper, IHandlerArch archivo, IDishRepository dishRepository)
        {
            _Repository = repository;
            _mapper = mapper;
            _dishRepository = dishRepository;
            _archivo = archivo;
        }
        public async Task<Response<bool>> Create(RgDishDto rgDishDto)
        {
            Response<bool> response = new Response<bool>();
            try
            {
                Dish dish = _mapper.Map<Dish>(rgDishDto);
                ICollection<PictureDish> pictureDish = new List<PictureDish>();
                foreach (var item in rgDishDto.img)
                {
                    PictureDish dishPicture=new PictureDish();
                    dishPicture.UrlImg = await _archivo.GuardarImagen(item,"Dish");
                    pictureDish.Add(dishPicture);
                }
                dish.PictureDishes=pictureDish;
                await _Repository.DishRepository.Insert(dish);
                var code = await _Repository.DishRepository.Save();
                if (code>=1)
                {
                    response.Data = true;
                    response.IsSucces = true;
                    response.Message = "consulta Exitosa!!";
                }
                else
                {
                    response.Data = false;
                    response.IsSucces = false;
                    response.Message = "problemas en la consulta!!";
                }
            }
            catch ( Exception ex)
            {
                response.Message=ex.Message;
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

        public Task<bool> Update(User Entity)
        {
            throw new NotImplementedException();
        }
    }
}
