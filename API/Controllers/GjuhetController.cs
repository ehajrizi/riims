using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Gjuhet;
using Domain;
using Microsoft.AspNetCore.Mvc;



namespace API.Controllers
{
    public class GjuhetController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Gjuha>>> GetGjuhet()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")] // Gjuhet/id
        public async Task<ActionResult<Gjuha>> GetGjuha(Guid id)
        {
            return await Mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]
        public async Task<IActionResult> CreateGjuha(Gjuha gjuha)
        {
            return Ok(await Mediator.Send(new Create.Command {Gjuha = gjuha}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditGjuha(Guid id, Gjuha gjuha)
        {
            gjuha.Id = id;
            return Ok(await Mediator.Send(new Edit.Command {Gjuha = gjuha}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGjuha(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command {Id = id}));
        }
    }
}