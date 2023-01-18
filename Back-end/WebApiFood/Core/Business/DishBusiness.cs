using AutoMapper;
using WebApiFood.Core.Interfaces;
using WebApiFood.Core.Models.Dtos;
using WebApiFood.Core.Models.Dtos.CommentDtos;
using WebApiFood.Core.Models.Dtos.DishDtos;
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
        private readonly IPictureDishRepository _pictureDishRepository;
        private readonly IHandlerArch _archivo;
        public DishBusiness(IUnitOfWork repository, IMapper mapper, IHandlerArch archivo, IDishRepository dishRepository,IPictureDishRepository pictureDishRepository)
        {
            _Repository = repository;
            _mapper = mapper;
            _dishRepository = dishRepository;
            _archivo = archivo;
            _pictureDishRepository = pictureDishRepository;
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

        public async Task<Response<bool>> Delete(int idEntity)
        {
            Response<bool> response = new Response<bool>();
            try
            {
                Dish dish = await _dishRepository.GetById(idEntity);
                if (dish != null)
                {
                    ICollection<PictureDish> pictureDishList = await _pictureDishRepository.GetPictureDishById(idEntity);
                    var cod = await _pictureDishRepository.DeletePictureDishById(idEntity);
                    await _Repository.DishRepository.Delete(dish);
                    int code = await _Repository.DishRepository.Save();
                    
                    if (code >= 1 && cod==true)
                    {
                        response.Data = true;
                        response.Message = "Eliminado con exito!!";
                        response.IsSucces = true;
                        foreach (var item in pictureDishList)
                        {
                            await _archivo.BorraArchivo(item.UrlImg,"Dish");
                        }
                    }
                    else
                    {
                        response.Data = false;
                        response.Message = "problemas en eliminar el registro!!";
                        response.IsSucces = false;
                    }
                }
                else
                {
                    response.Data = false;
                }

               
                
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
            }
            return response;
        }

        public Task<IEnumerable<User>> GetAll()
        {
            throw new NotImplementedException();
        }

        public async Task<Response<IEnumerable<GetCommentDto>>> GetAllCommentByDish(int idDish)
        {
            Response<IEnumerable<GetCommentDto>> response = new ();
            try
            {
                var commets = await _dishRepository.GetAllBydish(idDish);
                IEnumerable<GetCommentDto> getcomment = _mapper.Map<IEnumerable<GetCommentDto>>(commets);
                response.Data = getcomment;
                 var d = response.Data.Count();
                if(response.Data != null)
                {
                    response.IsSucces = true;
                    response.Message = "Consulta Exitosa!";
                }
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
            }
            return response;
        }

        public async Task<Response<IEnumerable<GetDishDto>>> GetAllDish(int idBus)
        {
            Response<IEnumerable<GetDishDto>> response = new Response<IEnumerable<GetDishDto>>();
            try
            {
                IEnumerable<Dish> dish = await _dishRepository.GetAllByBusiness(idBus);
                IEnumerable<GetDishDto> getDish = _mapper.Map<IEnumerable<GetDishDto>>(dish);
                if (getDish != null)
                {
                    response.Data = getDish;
                    response.IsSucces = true;
                    response.Message = "Consulta Exitosa!!";
                }
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
            }
            return response;
        }

        public Task<User> GetById(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<Response<bool>> Update(int idEntity, UpdateDto entityDto)
        {
            Response<bool> response = new();
            try
            {
                ICollection<PictureDish> search = await _pictureDishRepository.GetPictureDishById(idEntity);
                Dish dish = _mapper.Map<Dish>(entityDto);
                dish.Id = idEntity;
                if(entityDto.img.Count() >= 1)
                {
                    ICollection<PictureDish> pictureDishes = new List<PictureDish>();
                    foreach (var item in entityDto.img)
                    {
                        PictureDish pictureDishItem = new PictureDish();
                        pictureDishItem.UrlImg = await _archivo.GuardarImagen(item, "Dish");
                        pictureDishes.Add(pictureDishItem);
                    }
                    dish.PictureDishes = pictureDishes;
                    await _Repository.DishRepository.Update(dish);
                    int code = await _Repository.DishRepository.Save();
                    if(code >= 1)
                    {
                        response.Data = true;
                        response.IsSucces = true;
                        response.Message = "consulta Exitosa!!";
                    }
                    else
                    {
                        response.Data = false;
                        response.IsSucces = false;
                        response.Message = "problema en la consulta!!";
                    }
                        
                }
                await _Repository.DishRepository.Update(dish);
                int code2 = await _Repository.DishRepository.Save();
                if (code2 >= 1)
                {
                    response.Data = true;
                    response.IsSucces = true;
                    response.Message = "consulta Exitosa!!";
                }
                else
                {
                    response.Data = false;
                    response.IsSucces = false;
                    response.Message = "problema en la consulta!!";
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
