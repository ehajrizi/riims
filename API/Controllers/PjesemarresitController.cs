using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Pjesemarresit;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class PjesemarresitController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Pjesemarresi>>> GetPjesemarresit()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Pjesemarresi>> GetPjesemarresi(Guid id)
        {
            return await Mediator.Send(new Details.Query { Id = id });
        }

        [HttpPost]
        public async Task<IActionResult> CreatePjesemarresi(Pjesemarresi pjesemarresi)
        {
            return Ok(await Mediator.Send(new Create.Command { Pjesemarresi = pjesemarresi }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditPjesemarresi(Guid id, Pjesemarresi pjesemarresi)
        {
            pjesemarresi.Id = id;
            return Ok(await Mediator.Send(new Edit.Command { Pjesemarresi = pjesemarresi }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePjesemarresi(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}