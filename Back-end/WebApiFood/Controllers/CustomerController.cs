using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using WebApiFood.Core.Helpers;
using WebApiFood.Core.Interfaces;
using WebApiFood.Core.Models.Dtos;
using WebApiFood.Core.Models.Dtos.UserDtos;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApiFood.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerBusiness _service;
        public CustomerController(ICustomerBusiness service)
        {
            _service = service;
        }
        // GET: api/<UsuarioController>
      

        // GET api/<UsuarioController>/5
   

        // POST api/<UsuarioController>
        [HttpPost]
        [Consumes("multipart/form-data")]
       
        public async Task<IActionResult> Post([FromForm] RgCustomerDto rgCustomerDto)
        {
            await _service.Create(rgCustomerDto);
            return Ok();
        }

        [HttpPut]
        public async Task<IActionResult> UpdateCustomer([FromForm] UpdateCustomerDto entityDto)
        {
            var claims = HttpContext.User.Claims;
            int idUser = TokenJwt.GetUserId(claims);
            if (claims.Any())
            {
                var response = await _service.Update(entityDto, idUser);
                if (response.IsSucces == true)
                {
                    return Ok(response);
                }
                else
                    return BadRequest(response);

            }
            else
                return Unauthorized();


        }


    }
}
