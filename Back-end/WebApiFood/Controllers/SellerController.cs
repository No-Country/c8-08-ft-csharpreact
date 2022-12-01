using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApiFood.Core.Models.Dtos;
using WebApiFood.Core.Interfaces;

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
    }
}
