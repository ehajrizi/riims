using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Edukimet;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;



namespace API.Controllers
{
    [AllowAnonymous]
    public class EdukimetController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetEdukimet()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        [HttpGet("{id}")] // edukimet/id
        public async Task<IActionResult> GetEdukimi(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query{Id = id}));
        }

        [HttpPost]
        public async Task<IActionResult> CreateEdukimi(Edukimi edukimi)
        {
            return HandleResult(await Mediator.Send(new Create.Command {Edukimi = edukimi}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditEdukimi(Guid id, Edukimi edukimi)
        {
            edukimi.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command {Edukimi = edukimi}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEdukimi(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command {Id = id}));
        }
    }
}