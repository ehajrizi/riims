using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Pjesemarresit;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [AllowAnonymous]
    public class PjesemarresitController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetPjesemarresit()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPjesemarresi(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query { Id = id }));
        }

        [HttpPost]
        public async Task<IActionResult> CreatePjesemarresi(Pjesemarresi pjesemarresi)
        {
            return HandleResult(await Mediator.Send(new Create.Command { Pjesemarresi = pjesemarresi }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditPjesemarresi(Guid id, Pjesemarresi pjesemarresi)
        {
            pjesemarresi.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command { Pjesemarresi = pjesemarresi }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePjesemarresi(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}