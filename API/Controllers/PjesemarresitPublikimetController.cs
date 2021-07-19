using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.PjesemarresitPublikimet;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;



namespace API.Controllers
{
    [AllowAnonymous]

    public class PjesemarresitPublikimetController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetPjesemarresitPublikimet()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        [HttpGet("{id}")] 
        public async Task<IActionResult> GetPjesemarresiPublikimi(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query{Id = id}));
        }

        [HttpPost]
        public async Task<IActionResult> CreatePjesemarresitPublikimet(PjesemarresiPublikimi pjesemarresiPublikimi)
        {
            return HandleResult(await Mediator.Send(new Create.Command {PjesemarresiPublikimi = pjesemarresiPublikimi}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditPjesemarresitPublikimet(Guid id, PjesemarresiPublikimi pjesemarresiPublikimi)
        {
            pjesemarresiPublikimi.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command {PjesemarresiPublikimi = pjesemarresiPublikimi}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePjesemarresiPublikimi(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command {Id = id}));
        }
    }
}