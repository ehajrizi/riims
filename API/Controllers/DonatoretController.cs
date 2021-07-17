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
        public async Task<IActionResult> GetDonatoret()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetDonatori(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query { Id = id }));
        }

        [HttpPost]
        public async Task<IActionResult> CreateDonatori(Donatori donatori)
        {
            return HandleResult(await Mediator.Send(new Create.Command { Donatori = donatori }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditDonatori(Guid id, Donatori donatori)
        {
            donatori.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command { Donatori = donatori }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDonatori(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}