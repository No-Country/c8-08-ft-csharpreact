using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApiFood.Core.Interfaces;
using WebApiFood.Core.Models.Dtos;
namespace WebApiFood.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommetController : ControllerBase
    {
        private readonly ICommentBusiness _commentBusiness;
        public CommetController(ICommentBusiness commentBusiness)
        {
            _commentBusiness = commentBusiness;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] RgCommentDto rgCommentDto)
        {
            var rest = await _commentBusiness.Create(rgCommentDto);
            return Ok(rest);
        }
    }
}
