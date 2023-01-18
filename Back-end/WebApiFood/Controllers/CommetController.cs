using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApiFood.Core.Helpers;
using WebApiFood.Core.Interfaces;
using WebApiFood.Core.Models.Dtos;
namespace WebApiFood.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize(Roles ="3")]
    public class CommetController : ControllerBase
    {
        private readonly ICommentBusiness _commentBusiness;
        public CommetController(ICommentBusiness commentBusiness)
        {
            _commentBusiness = commentBusiness;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] RgCommentDto rgCommentDto)
        {
            var claims = HttpContext.User.Claims;
            if (claims.Any())
            {
                int idUser = TokenJwt.GetUserId(claims);
                var response = await _commentBusiness.Create(rgCommentDto,idUser);
                if (response.IsSucces == true)
                {
                    return Ok(response);
                }
                else
                    return BadRequest(response);
               
            }

            return Unauthorized();
        }

        [HttpGet]
        public async Task<IActionResult> GetCommentByUserId()
        {
            var claims = HttpContext.User.Claims;
            if (claims.Any())
            {
                int idUser = TokenJwt.GetUserId(claims);
                var response = await _commentBusiness.GetByIdUser(idUser);
                if (response.IsSucces == true)
                {
                    return Ok(response);
                }
                else
                    return BadRequest(response);

            }
            return Unauthorized();
        }
    }
}
