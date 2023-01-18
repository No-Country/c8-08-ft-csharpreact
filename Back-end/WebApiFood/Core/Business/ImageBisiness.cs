using AutoMapper;
using WebApiFood.Core.Interfaces;
using WebApiFood.HandlerArch;
using WebApiFood.Repositories;
using WebApiFood.Repositories.Interfaces;
using WebApiFood.Entities;

namespace WebApiFood.Core.Business
{
    public class ImageBisiness : IImageBusiness
    {
        private readonly IUnitOfWork _Repository;
        private readonly IMapper _mapper;
        private readonly IHandlerArch _archivo;
        private readonly IImageRepository _imageRepository;
        public ImageBisiness(IUnitOfWork repository, IMapper mapper, IHandlerArch archivo, IImageRepository imageRepository)
        {
            _Repository = repository;
            _mapper = mapper;
            _archivo = archivo;
            _imageRepository = imageRepository;
        }

        public async Task<Response<bool>> DeleteBusiness(int id)
        {
            Response<bool> response = new();
            try
            {
                PictureBusiness pictureBusiness = await _imageRepository.GetPictureBusinesId(id);
                await _archivo.BorraArchivo(pictureBusiness.UrlImg, "IBusines");
                await _Repository.PictureBusinessRepository.Delete(pictureBusiness);
                int code = await _Repository.PictureBusinessRepository.Save();
                if (code >= 1)
                {
                    response.Data = true;
                    response.Message = "Eliminado con Exito!!";
                    response.IsSucces = true;
                }
                else
                {
                    response.Data = false;
                    response.Message = "Problemas en Eliminar!!";
                    response.IsSucces = false;
                }
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
            }
            return response;
        }

        public async Task<Response<bool>> DeleteDish(int id)
        {
            Response<bool> response = new();
            try
            {
                PictureDish pictureDish = await _imageRepository.GetPictureDishId(id);
                await _archivo.BorraArchivo(pictureDish.UrlImg, "Dish");
                await _Repository.PictureDishRepository.Delete(pictureDish);
                int code = await _Repository.PictureDishRepository.Save();
                if (code >= 1)
                {
                    response.Data = true;
                    response.Message = "Eliminado con Exito!!";
                    response.IsSucces = true;
                }
                else
                {
                    response.Data = false;
                    response.Message = "Problemas en Eliminar!!";
                    response.IsSucces = false;
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
