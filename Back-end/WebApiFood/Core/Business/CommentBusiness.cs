using AutoMapper;
using WebApiFood.Core.Interfaces;
using WebApiFood.Core.Models.Dtos;
using WebApiFood.Entities;
using WebApiFood.Repositories;
using WebApiFood.Repositories.Interfaces;

namespace WebApiFood.Core.Business
{
    public class CommentBusiness : ICommentBusiness
    {
        private readonly IUnitOfWork _Repository;
        private readonly IMapper _mapper;
        public CommentBusiness(IUnitOfWork Repository, IMapper mapper)
        {
            _mapper = mapper;
            _Repository = Repository;
        }
        public async Task<Response<bool>> Create(RgCommentDto commentDto)
        {
            Response<bool> response = new Response<bool>();
            try
            {
                Comment comment = _mapper.Map<Comment>(commentDto);
                await _Repository.CommentRepository.Insert(comment);
                var code = await _Repository.CommentRepository.Save();
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
