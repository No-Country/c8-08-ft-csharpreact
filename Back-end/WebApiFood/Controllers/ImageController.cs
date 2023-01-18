using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApiFood.Core.Interfaces;

namespace WebApiFood.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImageController : ControllerBase
    {
        private readonly IImageBusiness _IServiceBusiness;
        public ImageController(IImageBusiness iServiceBusiness)
        {
            _IServiceBusiness = iServiceBusiness;
        }

        [HttpDelete]
        [Route("delete/ImgBusines")]
        public async Task<IActionResult> DeleteBusines([FromQuery] int idImg)
        {
            var response = await _IServiceBusiness.DeleteBusiness(idImg);
            if(response.IsSucces == true)
            {
                return Ok(response);
            }
            return BadRequest(response);
        }
        [HttpDelete]
        [Route("delete/ImgDish")]
        public async Task<IActionResult> DeleteDish([FromQuery] int idImg)
        {
            var response = await _IServiceBusiness.DeleteDish(idImg);
            if (response.IsSucces == true)
            {
                return Ok(response);
            }
            return BadRequest(response);
        }
    }
}
