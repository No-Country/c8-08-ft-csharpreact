using Microsoft.AspNetCore.Mvc;
using WebApiFood.Core.Interfaces;
using WebApiFood.Core.Models.Dtos;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApiFood.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly IUsuarioBusiness _service;
        public UsuarioController(IUsuarioBusiness service)
        {
            _service = service;
        }
        // GET: api/<UsuarioController>
        [HttpGet]
        public async Task<IActionResult> Get(RgCustomerDto rgCustomerDto)
        {
            await _service.Create(rgCustomerDto);
            return Ok();
        }

        // GET api/<UsuarioController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<UsuarioController>
        [HttpPost]
        public async Task<IActionResult> Post([FromForm] RgCustomerDto rgCustomerDto)
        {
            await _service.Create(rgCustomerDto);
            return Ok();
        }

        // PUT api/<UsuarioController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<UsuarioController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
