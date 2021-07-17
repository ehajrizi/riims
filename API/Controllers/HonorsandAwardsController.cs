using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.HonorsandAwards;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [AllowAnonymous]

    public class HonorsandAwardsController : BaseApiController
    {

        [HttpGet]
        public async Task<IActionResult> GetHonorsandAwards()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        [HttpGet("{id}")]  //MbikeqyresiTemave/id
        public async Task<IActionResult> GetHonorsandAwards(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query{Id = id}));
        }

        [HttpPost]
        public async Task<IActionResult> CreateHonorsandAwards(HonorandAward honorsandawards)
        {
            return HandleResult(await Mediator.Send(new Create.Command{HonorandAward = honorsandawards}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditHonorsandAwards(Guid id, HonorandAward honorsandawards)
        {
            honorsandawards.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command{HonorandAward = honorsandawards}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHonorsandAwards(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command{Id = id}));
        }
    }
}