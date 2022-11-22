using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApiFood.Core.Interfaces;
using WebApiFood.Core.Models.Dtos;

namespace WebApiFood.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BusinessController : ControllerBase
    {
        private readonly IBusinesBusiness _services;
        public BusinessController(IBusinesBusiness services)
        {
            _services=services;
        }
        [HttpPost]
        public async Task<IActionResult> Post([FromForm] RgBusinessDto rgBusinessDto)
        {
            var res = await _services.Create(rgBusinessDto);
            return Ok(res);
        }
    }
}
