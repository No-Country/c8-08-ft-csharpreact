using AutoMapper;
using WebApiFood.Core.Helpers;
using WebApiFood.Core.Interfaces;
using WebApiFood.Core.Models.Dtos;
using WebApiFood.Core.Models.Dtos.BusinesDtos;
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
        /// <summary>
        /// Create Business
        /// </summary>
        /// <param name="rgbusinesDto"></param>
        /// <returns></returns>
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

        public async Task<Busines> GetByUserAsync(int idUser)
        {
            return await _businessRepository.GetByIdUser(idUser);
        }

        public async Task<Response<IEnumerable<ListaBusinesDto>>> GetAllByUserAsync(int idUser)
        {
            Response<IEnumerable<ListaBusinesDto>> response = new Response<IEnumerable<ListaBusinesDto>>();
            try
            {
                IEnumerable<Busines> busines = await _businessRepository.GetAllAsyncByUser(idUser);
             
                response.Data = _mapper.Map<ICollection<ListaBusinesDto>>(busines);
                if (response.Data !=null)
                {
                    response.IsSucces = true;
                    response.Message = "consulta exitosa!!";
                }
                else
                {
                    response.IsSucces = false;
                    response.Message = "se encontraron problemas en la consulta!!";
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

        public async Task<Response<bool>> Update(int idB , UpdateBusinesDto EntityDto)
        {
            Response<bool> response = new Response<bool>();
            try
            {
                Busines busines = _mapper.Map<Busines>(EntityDto);
                busines.Id = idB;
                if (EntityDto.Img.Count() >= 1)
                {
                    ICollection<PictureBusiness> pictureBusiness = new List<PictureBusiness>();
                    foreach (var item in EntityDto.Img)
                    {
                        PictureBusiness pictureBusinessItem = new PictureBusiness();
                        pictureBusinessItem.UrlImg = await _archivo.GuardarImagen(item, "IBusines");
                        pictureBusiness.Add(pictureBusinessItem);
                    }
                    busines.PictureBusinesses = pictureBusiness;
                }
                await _Repository.BusinessRepository.Update(busines);
                int code = await _Repository.BusinessRepository.Save();
                if(code >= 1)
                {
                    response.IsSucces = true;
                    response.Data = true;
                    response.Message = "Actualizacion exitosa!!";
                }
                else
                {
                    response.IsSucces = false;
                    response.Data = false;
                    response.Message = "problemas en la consulta!!";
                }

            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
            }
            return response;
        }

        public async Task<Pagination<IEnumerable<ListaBusinesDto>>> GetAllBusinesAsync(int pageNumber, int pageSize)
        {
           
            Pagination<IEnumerable<ListaBusinesDto>> response = new();
            try
            {
                //var d = await _businessRepository.GetBusinesByPagination();
                List<Busines> busines =(List<Busines>) await _businessRepository.GetAllAsyncBusiness();
                IQueryable<Busines> Qbusiness = busines.AsQueryable();
                PagedList<Busines> pageList = PagedList<Busines>.Crear(Qbusiness,pageNumber,pageSize);
                if (pageList.TotalCount == 0)
                {
                    response.Data = null;
                    response.Message = "no hay registros en la base de datos! -Registros = 0";
                }else if (pageSize > pageList.TotalCount)
                {
                    response.Data = null;
                    response.Message = "el rango de registro es inferior al numero de registros de consulta!";
                }
                response.Data = _mapper.Map<IEnumerable<ListaBusinesDto>>(pageList);
                response.IsSucces = true;
                response.Message = "consulta con exito!!";
                response.PageNumber = pageNumber;
                response.TotalPage = pageList.TotalPage;
                response.TotalCount = pageList.TotalCount;
               
            }
            catch (Exception ex)
            {
                response.Message=ex.Message;
            }
            return response;
        }
    }
}
