using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApiFood.Core.Interfaces;
using WebApiFood.Core.Models.Dtos;

namespace WebApiFood.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly ICustomerBusiness _service;
        public LoginController(ICustomerBusiness service)
        {
            _service=service;
        }
        [HttpPost]
        public async Task<IActionResult> Auth(LoginDto login)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(string.Join(" | ", ModelState.Values.SelectMany(v => v.Errors).Select(e => e.ErrorMessage)));
            }
            else
            {
                var response = await _service.loginUser(login);
                if (response.IsSucces==true)
                {
                    return Ok(response);
                }
                return BadRequest(response.Message);
            }
        }
    }
}
