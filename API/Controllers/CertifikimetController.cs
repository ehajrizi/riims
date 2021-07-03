using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Certifikimet;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [AllowAnonymous]
    public class CertifikimetController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Certifikimi>>> GetCertifikimet()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")] 
        public async Task<ActionResult<Certifikimi>> GetCertifikimi(Guid id)
        {
            return await Mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]
        public async Task<IActionResult> CreateCertifikimi(Certifikimi certifikimi)
        {
            return Ok(await Mediator.Send(new Create.Command{Certifikimi = certifikimi}));
        }

        [HttpPut("{id}")]

        public async Task<IActionResult> EditCertifikimi(Guid id, Certifikimi certifikimi)
        {
            certifikimi.Id = id;
            return Ok(await Mediator.Send(new Edit.Command{Certifikimi = certifikimi}));
        }

        [HttpDelete("{id}")]

        public async Task<IActionResult> DeleteCertifikimi(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }

        
    }
}