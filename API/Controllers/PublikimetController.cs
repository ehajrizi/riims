using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Application.Publikimet;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DatabaseLogic;

namespace API.Controllers
{
    public class PublikimetController : BaseApiController
    {
        private readonly IMediator _mediator;
        public PublikimetController(IMediator mediator)
        {
            _mediator = mediator;

        }

        [HttpGet]
        public async Task<ActionResult<List<Publikimi>>> GetPublikimet()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]  //publikimet/id
        public async Task<ActionResult<Publikimi>> GetPublikimi(Guid id)
        {
            return await Mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]
        public async Task<IActionResult> CreatePublikimi(Publikimi publikimi)
        {
            return Ok(await Mediator.Send(new Create.Command {Publikimi = publikimi}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditPublikimi(Guid id, Publikimi publikimi)
        {
            publikimi.Id = id;
            return Ok(await Mediator.Send(new Edit.Command{Publikimi = publikimi}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePublikimi(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }
    }
}