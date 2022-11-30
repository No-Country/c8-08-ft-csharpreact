using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApiFood.Core.Interfaces;
using WebApiFood.Core.Models.Dtos;

namespace WebApiFood.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReservationController : ControllerBase
    {
        private readonly IResevationBusiness _RServicio;
        public ReservationController(IResevationBusiness rServicio)
        {
            _RServicio = rServicio;
        }
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] ReservationDto reservationDto)
        {
            var code = await _RServicio.Create(reservationDto);
            return Ok(code);
        }
        [HttpGet]
        //idCustomer
        [Route("{idC}/ByCustomer")]
        public async Task<IActionResult> GetAllResByCustomerId(int idC)
        {
            var response = await _RServicio.GetAllByCustomerId(idC);
            if(response.Data.Count()==0)
                return NotFound(response.Message ="No hay datos en la Base de datos!!");
            if(response.IsSucces ==true)
                return Ok(response);
            return BadRequest(response);
        }
        [HttpGet]
        //idCustomer
        [Route("{idS}/BySeller")]
        public async Task<IActionResult> GetAllResBySellerId(int idS)
        {
            var response = await _RServicio.GetAllBySellerId(idS);
            if (response.Data.Count() == 0)
                return NotFound(response.Message = "No hay datos en la Base de datos!!");
            if (response.IsSucces == true)
                return Ok(response);
            return BadRequest(response);
        }
    }
}
