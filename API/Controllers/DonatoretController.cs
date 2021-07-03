using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Donatoret;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [AllowAnonymous]
    public class DonatoretController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Donatori>>> GetDonatoret()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Donatori>> GetDonatori(Guid id)
        {
            return await Mediator.Send(new Details.Query { Id = id });
        }

        [HttpPost]
        public async Task<IActionResult> CreateDonatori(Donatori donatori)
        {
            return Ok(await Mediator.Send(new Create.Command { Donatori = donatori }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditDonatori(Guid id, Donatori donatori)
        {
            donatori.Id = id;
            return Ok(await Mediator.Send(new Edit.Command { Donatori = donatori }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDonatori(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}