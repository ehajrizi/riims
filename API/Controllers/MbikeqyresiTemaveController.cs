using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Application.MbikeqyresitTemave;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DatabaseLogic;

namespace API.Controllers
{
    public class MbikeqyresiTemaveController : BaseApiController
    {
        private readonly IMediator _mediator;
        public MbikeqyresiTemaveController(IMediator mediator)
        {
            _mediator = mediator;

        }

        [HttpGet]
        public async Task<ActionResult<List<MbikeqyresiTemave>>> GetMbikeqyresitTemave()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]  //MbikeqyresiTemave/id
        public async Task<ActionResult<MbikeqyresiTemave>> GetMbikeqyresiTemave(Guid id)
        {
            return await Mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]
        public async Task<IActionResult> CreateMbikeqyresiTemave(MbikeqyresiTemave mbikeqyresitemave)
        {
            return Ok(await Mediator.Send(new Create.Command{MbikeqyresiTemave = mbikeqyresitemave}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditMbikeqyresiTemave(Guid id, MbikeqyresiTemave mbikeqyresitemave)
        {
            mbikeqyresitemave.Id = id;
            return Ok(await Mediator.Send(new Edit.Command{MbikeqyresiTemave = mbikeqyresitemave}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMbikeqyresiTemave(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }
    }
}