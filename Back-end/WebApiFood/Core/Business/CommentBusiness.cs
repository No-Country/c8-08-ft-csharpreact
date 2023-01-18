using AutoMapper;
using WebApiFood.Core.Interfaces;
using WebApiFood.Core.Models.Dtos;
using WebApiFood.Core.Models.Dtos.CommentDtos;
using WebApiFood.Entities;
using WebApiFood.Repositories;
using WebApiFood.Repositories.Interfaces;

namespace WebApiFood.Core.Business
{
    public class CommentBusiness : ICommentBusiness
    {
        private readonly IUnitOfWork _Repository;
        private readonly IUserRepository _userRepository;
        private readonly ICommentRepository _commentRepository;
        private readonly IMapper _mapper;
        public CommentBusiness(IUnitOfWork Repository, IMapper mapper, IUserRepository userRepository,ICommentRepository commentRepository)
        {
            _mapper = mapper;
            _Repository = Repository;
            _userRepository = userRepository;
            _commentRepository = commentRepository;
        }
        public async Task<Response<bool>> Create(RgCommentDto commentDto ,int idUser)
        {
            Response<bool> response = new Response<bool>();
            try
            {
                User user = await _userRepository.GetById(idUser);
                if(user !=null && user.customer != null)
                {
                    Comment comment = _mapper.Map<Comment>(commentDto);
                    comment.CustomerId = user.customer.Id;
                    comment.UserId = idUser;
                    comment.Fecha = DateTime.UtcNow;
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

        public async Task<Response<IEnumerable<GetCommentDto>>> GetByIdUser(int idUser)
        {
            Response<IEnumerable<GetCommentDto>> response = new ();
            try
            {
                var comments = await _commentRepository.GetByUser(idUser);
                response.Data = _mapper.Map<IEnumerable<GetCommentDto>>(comments);
                if (response.Data !=null)
                {
                    response.IsSucces = true;
                    response.Message = "consulta exitosa!!";
                }
                else
                {
                    response.IsSucces = false;
                    response.Message = "problemas en la consulta!!";
                }
            }
            catch (Exception ex)
            {
                response.Message=ex.Message;
            }
            return response;
        }

        public Task<bool> Update(User Entity)
        {
            throw new NotImplementedException();
        }
    }
}
