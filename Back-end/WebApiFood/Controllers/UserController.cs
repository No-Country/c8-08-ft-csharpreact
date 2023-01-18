using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApiFood.Core.Helpers;
using WebApiFood.Core.Interfaces;

namespace WebApiFood.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserBusiness _userBusiness;
        public UserController(IUserBusiness userBusiness)
        {
            _userBusiness = userBusiness;
        }

        [HttpGet]
        [Route("All")]
        public async Task<IActionResult> GetAllUser()
        {
            var users = await _userBusiness.GetUsers();
            if(users.IsSucces == true)
            {
                return Ok(users);
            }
            else
            {
                return BadRequest(users);
            }
        }
        [HttpGet]
        [Route("ByUser")]
        public async Task<IActionResult> GetUserId()
        {
            var claims = HttpContext.User.Claims;
            //int idUser = int.Parse(HttpContext.User.Claims.FirstOrDefault(x => x.Type.Equals("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"))?.Value);
           
            if (claims.Any())
            {
                int idUser = TokenJwt.GetUserId(claims);
                var search = await _userBusiness.GetById(idUser);
                if (search.IsSucces == true)
                {
                    if (search.Data.Seller != null)
                    {
                        var response = await _userBusiness.GetByIdSeller(search.Data.Seller.Id);
                        return Ok(response);
                    }
                    else if (search.Data.customer != null)
                    {
                        var response = await _userBusiness.GetByIdCustomer(search.Data.customer.Id);
                        return Ok(response);
                    }
                }
                return NotFound(search);

               
            }
            else
                return Unauthorized();
           
        }
    }
}
