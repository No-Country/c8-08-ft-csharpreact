using AutoMapper;
using WebApiFood.Core.Interfaces;
using WebApiFood.Core.Models.Dtos.BusinesDtos;
using WebApiFood.Entities;
using WebApiFood.Repositories;
using WebApiFood.Repositories.Interfaces;

namespace WebApiFood.Core.Business
{
    public class ScoreBusinesBusiness : IScoreBusinesBusiness
    {
        private readonly IUnitOfWork _Repository;
        private readonly IMapper _mapper;
        public ScoreBusinesBusiness(IUnitOfWork repository, IMapper mapper)
        {
            _Repository = repository;
            _mapper = mapper;
        }

        public async Task<Response<bool>> Create(ScoreBusinesDto scoreBusinesDto)
        {
            Response<bool> response = new Response<bool>();
            try
            {
                ScoreBusiness scoreBusiness = _mapper.Map<ScoreBusiness>(scoreBusinesDto);
                await _Repository.ScoreBusinesRepository.Insert(scoreBusiness);
                var code = await _Repository.ScoreBusinesRepository.Save();
                if (code>=1)
                {
                    response.IsSucces = true;
                    response.Message = "consulta Exitosa!";
                    response.Data = true;
                }
                else
                {
                    response.Data = false;
                    response.IsSucces = false;
                    response.Message = "problema en la consulta!";
                }
            }
            catch (Exception ex)
            {
                response.Message=ex.Message;
            }
            return response;
        }
    }
}
