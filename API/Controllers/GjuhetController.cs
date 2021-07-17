using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Gjuhet;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;



namespace API.Controllers
{
    [AllowAnonymous]

    public class GjuhetController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetGjuhet()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        [HttpGet("{id}")] // Gjuhet/id
        public async Task<IActionResult> GetGjuha(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query{Id = id}));
        }

        [HttpPost]
        public async Task<IActionResult> CreateGjuha(Gjuha gjuha)
        {
            return HandleResult(await Mediator.Send(new Create.Command {Gjuha = gjuha}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditGjuha(Guid id, Gjuha gjuha)
        {
            gjuha.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command {Gjuha = gjuha}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGjuha(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command {Id = id}));
        }
    }
}