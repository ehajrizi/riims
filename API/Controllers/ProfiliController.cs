using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Profilet;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;



namespace API.Controllers
{
    [AllowAnonymous]
    public class ProfiliController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Profili>>> GetProfilet()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Profili>> GetProfili(Guid id)
        {
            return await Mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]
        public async Task<IActionResult> CreateProfili(Profili profili)
        {
            return Ok(await Mediator.Send(new Create.Command {Profili = profili}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditProfili(Guid id, Profili profili)
        {
            profili.Id = id;
            return Ok(await Mediator.Send(new Edit.Command {Profili = profili}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProfili(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command {Id = id}));
        }
    }
}