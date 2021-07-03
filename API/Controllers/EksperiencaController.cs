using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Eksperiencat;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [AllowAnonymous]
    public class EksperiencatController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Eksperienca>>> GetEksperiencat()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")] 
        public async Task<ActionResult<Eksperienca>> GetEksperienca(Guid id)
        {
            return await Mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]
        public async Task<IActionResult> CreateEksperienca(Eksperienca eksperienca)
        {
            return Ok(await Mediator.Send(new Create.Command{Eksperienca = eksperienca}));
        }

        [HttpPut("{id}")]

        public async Task<IActionResult> EditEksperienca(Guid id, Eksperienca eksperienca)
        {
            eksperienca.Id = id;
            return Ok(await Mediator.Send(new Edit.Command{Eksperienca = eksperienca}));
        }

        [HttpDelete("{id}")]

        public async Task<IActionResult> DeleteEksperienca(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }

        
    }
}