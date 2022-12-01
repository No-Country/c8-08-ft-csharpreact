using AutoMapper;
using WebApiFood.Core.Interfaces;
using WebApiFood.Core.Models.Dtos.DishDtos;
using WebApiFood.Entities;
using WebApiFood.Repositories;
using WebApiFood.Repositories.Interfaces;

namespace WebApiFood.Core.Business
{
    public class ScoreDishBusiness : IScoreDishBusiness
    {
        private readonly IUnitOfWork _Repository;
        private readonly IMapper _mapper;
        public ScoreDishBusiness(IUnitOfWork repository, IMapper mapper)
        {
            _Repository = repository;
            _mapper = mapper;
        }

        public async Task<Response<bool>> Create(ScoreDishDto scoreDishDto)
        {
            Response<bool> response = new Response<bool>();
            try
            {
                ScoreDish scoredish = _mapper.Map<ScoreDish>(scoreDishDto);
                await _Repository.ScoreDishRepository.Insert(scoredish);
                var code = await _Repository.ScoreDishRepository.Save();
                if (code >= 1)
                {
                    response.Data = true;
                    response.IsSucces = true;
                    response.Message = "consulta Exitosa!";
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
                response.Message = ex.Message;
            }
            return response;
        }
    }
}
