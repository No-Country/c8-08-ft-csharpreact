using AutoMapper;
using WebApiFood.Core.Interfaces;
using WebApiFood.Core.Models.Dtos;
using WebApiFood.Entities;
using WebApiFood.HandlerArch;
using WebApiFood.Repositories;
using WebApiFood.Repositories.Interfaces;

namespace WebApiFood.Core.Business
{
    public class BusinesBusiness : IBusinesBusiness
    {
        private readonly IUnitOfWork _Repository;
        private readonly IMapper _mapper;
        private readonly IBusinessRepository _businessRepository;
        private readonly IHandlerArch _archivo;
        public BusinesBusiness(IUnitOfWork repository, IMapper mapper, IBusinessRepository businessRepository, IHandlerArch archivo)
        {
            _Repository = repository;
            _mapper = mapper;
            _businessRepository = businessRepository;
            _archivo = archivo;
        }
        public async Task<Response<bool>> Create(RgBusinessDto rgbusinesDto)
        {
            Response<bool> response = new Response<bool>();
            try
            {
                Busines busines = _mapper.Map<Busines>(rgbusinesDto);
                ICollection<PictureBusiness> pictureBusiness = new List<PictureBusiness>();
                foreach (var item in rgbusinesDto.Img)
                {
                    PictureBusiness pictureBusinessItem = new PictureBusiness();
                    pictureBusinessItem.UrlImg = await _archivo.GuardarImagen(item, "IBusines");
                    pictureBusiness.Add(pictureBusinessItem);
                }
                busines.PictureBusinesses = pictureBusiness;
                //await _Repository.PictureBusinessRepository.Insert(pictureBusiness);
                await _Repository.BusinessRepository.Insert(busines);
                var code = await _Repository.BusinessRepository.Save();

                if (code >= 1)
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

        public Task<bool> Update(User Entity)
        {
            throw new NotImplementedException();
        }
    }
}
