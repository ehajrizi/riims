using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Projektet;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [AllowAnonymous]
    public class ProjektetController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetProjektet()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetProjekti(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query { Id = id }));
        }

        [HttpPost]
        public async Task<IActionResult> CreateProjekti(Projekti projekti)
        {
            return HandleResult(await Mediator.Send(new Create.Command { Projekti = projekti }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditProjekti(Guid id, Projekti projekti)
        {
            projekti.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command { Projekti = projekti }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProjekti(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}