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
        [HttpGet]
        public async Task<IActionResult> GetAllByBusiness([FromQuery] int idBusiness)
        {
           var rest= await _services.GetAllDish(idBusiness);
            return Ok(rest);
        }
        [HttpGet]
        [Route("{id}/ByComment")]
        public async Task<IActionResult> GetAllCommentByDish( int id)
        {
            var response = await _services.GetAllCommentByDish(id);
            if (response.Data.Count() == 0) return NotFound();
            if (response.IsSucces == true)
            {
                return Ok(response);
            }else
                return BadRequest(response);
           
        }
        [HttpDelete]
        [Route("Delete/{id}")]
        public async Task<IActionResult> DeleteDish(int id)
        {
            var response = await _services.Delete(id);
            if (response.Data == false) return NotFound(response);
            if (response.IsSucces == true)
            {
                return Ok(response);
            }
            else
                return BadRequest(response);

        }
    }
}
