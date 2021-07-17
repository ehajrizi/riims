using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.MbikeqyresitTemave;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [AllowAnonymous]
    public class MbikeqyresiTemaveController : BaseApiController
    {

        [HttpGet]
        public async Task<IActionResult> GetMbikeqyresitTemave()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        [HttpGet("{id}")]  //MbikeqyresiTemave/id
        public async Task<IActionResult> GetMbikeqyresiTemave(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query{Id = id}));
        }

        [HttpPost]
        public async Task<IActionResult> CreateMbikeqyresiTemave(MbikeqyresiTemave mbikeqyresitemave)
        {
            return HandleResult(await Mediator.Send(new Create.Command{MbikeqyresiTemave = mbikeqyresitemave}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditMbikeqyresiTemave(Guid id, MbikeqyresiTemave mbikeqyresitemave)
        {
            mbikeqyresitemave.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command{MbikeqyresiTemave = mbikeqyresitemave}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMbikeqyresiTemave(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command{Id = id}));
        }
    }
}