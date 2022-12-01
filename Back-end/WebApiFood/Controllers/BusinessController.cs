using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http.Headers;
using System.Security.Claims;
using WebApiFood.Core.Helpers;
using WebApiFood.Core.Interfaces;
using WebApiFood.Core.Models.Dtos;
using WebApiFood.Core.Models.Dtos.BusinesDtos;

namespace WebApiFood.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BusinessController : ControllerBase
    {
        private readonly IBusinesBusiness _services;
        


        public BusinessController(IBusinesBusiness services)
        {
            _services = services;
           
        }
        [HttpPost]
        public async Task<IActionResult> Post([FromForm] RgBusinessDto rgBusinessDto)
        {
            var res = await _services.Create(rgBusinessDto);
            return Ok(res);
        }
        [HttpGet]
        [Route("BusineByUser")]
        public async Task<IActionResult> GetBusinessByUser()
        {
           var  claims = HttpContext.User.Claims;
            //int idUser = int.Parse(HttpContext.User.Claims.FirstOrDefault(x => x.Type.Equals("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"))?.Value);
           int idUser = TokenJwt.GetUserId(claims);
            if (claims.Any())
            {
                var response = await _services.GetAllByUserAsync(idUser);
                return Ok(response);
            }
            else
                return Unauthorized();
           
           
        }
        [HttpGet]
        [Route("allBusines")]
        public async Task<IActionResult> GetAllBusiness([FromQuery(Name ="PageNumber")] int pageNumber, [FromQuery(Name ="PageSize")] int pageSize)
        {

            var response = await _services.GetAllBusinesAsync(pageNumber,pageSize);
            return Ok(response);
        }
        [HttpPut]
        [Route("update/{idB}")]
        public async Task<IActionResult> UpdateBusiness( int idB, [FromForm] UpdateBusinesDto EntityDto)
        {
            var response = await _services.Update(idB ,EntityDto);
            return Ok(response);
        }
    }
}
