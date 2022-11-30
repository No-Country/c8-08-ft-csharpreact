using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
    }
}
