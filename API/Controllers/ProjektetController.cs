using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Projektet;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ProjektetController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Projekti>>> GetProjektet()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Projekti>> GetProjekti(Guid id)
        {
            return await Mediator.Send(new Details.Query { Id = id });
        }

        [HttpPost]
        public async Task<IActionResult> CreateProjekti(Projekti projekti)
        {
            return Ok(await Mediator.Send(new Create.Command { Projekti = projekti }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditProjekti(Guid id, Projekti projekti)
        {
            projekti.Id = id;
            return Ok(await Mediator.Send(new Edit.Command { Projekti = projekti }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProjekti(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}