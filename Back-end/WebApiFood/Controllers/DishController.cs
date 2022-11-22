using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApiFood.Core.Models.Dtos;
using WebApiFood.Core.Interfaces;

namespace WebApiFood.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DishController : ControllerBase
    {
        private readonly IDishBusiness _services;
        public DishController(IDishBusiness services)
        {
            _services = services;
        }
        [HttpPost]
        public async Task<IActionResult> Post([FromForm]RgDishDto rgDishDto)
        {
           var rest= await _services.Create(rgDishDto);
            return Ok(rest);
        }
    }
}
