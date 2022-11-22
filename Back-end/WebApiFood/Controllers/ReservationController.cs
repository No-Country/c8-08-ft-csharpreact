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
    }
}
