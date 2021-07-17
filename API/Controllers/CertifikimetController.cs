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
        public async Task<IActionResult> GetCertifikimet()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        [HttpGet("{id}")] 
        public async Task<IActionResult> GetCertifikimi(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query{Id = id}));
        }

        [HttpPost]
        public async Task<IActionResult> CreateCertifikimi(Certifikimi certifikimi)
        {
            return HandleResult(await Mediator.Send(new Create.Command{Certifikimi = certifikimi}));
        }

        [HttpPut("{id}")]

        public async Task<IActionResult> EditCertifikimi(Guid id, Certifikimi certifikimi)
        {
            certifikimi.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command{Certifikimi = certifikimi}));
        }

        [HttpDelete("{id}")]

        public async Task<IActionResult> DeleteCertifikimi(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command{Id = id}));
        }

        
    }
}