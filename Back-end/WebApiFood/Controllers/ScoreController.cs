using Microsoft.AspNetCore.Http;
using WebApiFood.Core.Models.Dtos;
using Microsoft.AspNetCore.Mvc;
using WebApiFood.Core.Interfaces;

namespace WebApiFood.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ScoreController : ControllerBase
    {
        private readonly IScoreDishBusiness _scoreDishBusiness;
        private readonly IScoreBusinesBusiness _scoreBusinesBusiness;
        public ScoreController(IScoreDishBusiness scoreDishBusiness, IScoreBusinesBusiness scoreBusinesBusiness)
        {
            _scoreDishBusiness = scoreDishBusiness;
            _scoreBusinesBusiness = scoreBusinesBusiness;
        }

        [HttpPost]
        [Route("Dish")]
        public async Task<IActionResult> ScoreDish(ScoreDishDto scoreDishDto)
        {
            var rest = await _scoreDishBusiness.Create(scoreDishDto);
            return Ok(rest);
        }
        [HttpPost]
        [Route("Busines")]
        public async Task<IActionResult> ScoreBusiness(ScoreBusinesDto  scoreBusinesDto)
        {
            var rest = await _scoreBusinesBusiness.Create(scoreBusinesDto);
            return Ok(rest);
        }
    }
}
