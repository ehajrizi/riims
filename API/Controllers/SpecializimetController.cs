using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Application.Specializimet;

namespace API.Controllers
{
    [AllowAnonymous]
    public class SpecializimetController : BaseApiController
    {   

        [HttpGet]
        public async Task<IActionResult> GetSpecializimet()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }


        [HttpGet("{id}")] //specializimet/id
        public async Task<IActionResult> GetSpecializimi(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query{Id = id}));
        }


        [HttpPost]
        public async Task<IActionResult> CreateSpecializimi(Specializimi specializimi)
        {
            return HandleResult(await Mediator.Send(new Create.Command {Specializimi = specializimi}));
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> EditSpecializimi(Guid id, Specializimi specializimi)
        {
            specializimi.Id = id;

            return HandleResult(await Mediator.Send(new Edit.Command{Specializimi = specializimi}));
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSpecializimi(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command{Id = id})); 
        }


    }
}