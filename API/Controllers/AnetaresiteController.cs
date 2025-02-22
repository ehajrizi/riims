using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Anetaresite;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;



namespace API.Controllers
{
    [AllowAnonymous]
    public class AnetaresiteController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetAnetaresite()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        [HttpGet("{id}")] // Anetaresite/id
        public async Task<IActionResult> GetAnetaresia(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query{Id = id}));
        }

        [HttpPost]
        public async Task<IActionResult> CreateAnetaresia(Anetaresia anetaresia)
        {
            return HandleResult(await Mediator.Send(new Create.Command {Anetaresia = anetaresia}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditAnetaresia(Guid id, Anetaresia anetaresia)
        {
            anetaresia.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command {Anetaresia = anetaresia}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAnetaresia(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command {Id = id}));
        }
    }
}