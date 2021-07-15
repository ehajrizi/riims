using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.PjesemarresitPublikimet;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MediatR;

namespace API.Controllers
{
    [AllowAnonymous]
    public class PjesemarresitPublikimetController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<PjesemarresiPublikimi>>> GetPjesemarresitPublikimet()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<PjesemarresiPublikimi>> GetPjesemarresiPublikimi(Guid id)
        {
            return await Mediator.Send(new Details.Query { Id = id });
        }

        [HttpPost]
        public async Task<IActionResult> CreatePjesemarresiPublikimi(PjesemarresiPublikimi pjesemarresiPublikimi)
        {
            return Ok(await Mediator.Send(new Create.Command { PjesemarresiPublikimi = pjesemarresiPublikimi }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditPjesemarresiPublikimi(Guid id, PjesemarresiPublikimi pjesemarresiPublikimi)
        {
            pjesemarresiPublikimi.Id = id;
            return Ok(await Mediator.Send(new Edit.Command { PjesemarresiPublikimi = pjesemarresiPublikimi }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePjesemarresiPublikimi(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}