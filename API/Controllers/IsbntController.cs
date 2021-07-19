using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Isbnt;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;



namespace API.Controllers
{
    [AllowAnonymous]

    public class IsbntController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetIsbnt()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        [HttpGet("{id}")] 
        public async Task<IActionResult> GetIsbn(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query{Id = id}));
        }

        [HttpPost]
        public async Task<IActionResult> CreateIsbn(Isbn Isbn)
        {
            return HandleResult(await Mediator.Send(new Create.Command {Isbn = Isbn}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditIsbn(Guid id, Isbn Isbn)
        {
            Isbn.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command {Isbn = Isbn}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteIsbn(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command {Id = id}));
        }
    }
}