using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApiFood.Core.Models.Dtos;
using WebApiFood.Core.Interfaces;
using WebApiFood.Core.Models.Dtos.UserDtos;
using WebApiFood.Core.Helpers;

namespace WebApiFood.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SellerController : ControllerBase
    {
        private readonly ISellerBusiness _Bservices;
        public SellerController(ISellerBusiness Bservices)
        {
            _Bservices = Bservices;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromForm]RgSellerDto rgSellerDto)
        {
            await _Bservices.Create(rgSellerDto);
            return Ok();
        }

        [HttpPut]
        public async Task<IActionResult> UpdateSeller([FromForm] UpdateSellerDto entityDto)
        {
            var claims = HttpContext.User.Claims;
            int idUser = TokenJwt.GetUserId(claims);
            if (claims.Any())
            {
                var response = await _Bservices.Update(entityDto,idUser);
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
