using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Publikimet;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [AllowAnonymous]
    public class PublikimetController : BaseApiController
    {

        [HttpGet]
        public async Task<IActionResult> GetPublikimet()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        [HttpGet("{id}")]  //publikimet/id
        public async Task<IActionResult> GetPublikimi(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query{Id = id}));
        }

        [HttpPost]
        public async Task<IActionResult> CreatePublikimi(Publikimi publikimi)
        {
            return HandleResult(await Mediator.Send(new Create.Command {Publikimi = publikimi}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditPublikimi(Guid id, Publikimi publikimi)
        {
            publikimi.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command{Publikimi = publikimi}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePublikimi(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command{Id = id}));
        }
    }
}
