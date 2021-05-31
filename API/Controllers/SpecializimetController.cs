using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Application.Specializimet;

namespace API.Controllers
{
    public class SpecializimetController : BaseApiController
    {   

        [HttpGet]
        public async Task<ActionResult<List<Specializimi>>> GetSpecializimet()
        {
            return await Mediator.Send(new List.Query());
        }


        [HttpGet("{id}")] //specializimet/id
        public async Task<ActionResult<Specializimi>> GetSpecializimi(Guid id)
        {
            return await Mediator.Send(new Details.Query{Id = id});
        }


        [HttpPost]
        public async Task<IActionResult> CreateSpecializimi(Specializimi specializimi)
        {
            return Ok(await Mediator.Send(new Create.Command {Specializimi = specializimi}));
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> EditSpecializimi(Guid id, Specializimi specializimi)
        {
            specializimi.Id = id;

            return Ok(await Mediator.Send(new Edit.Command{Specializimi = specializimi}));
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSpecializimi(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id = id})); 
        }


    }
}