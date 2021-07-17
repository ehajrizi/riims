using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using DatabaseLogic;
using Application.Core;
using AutoMapper.QueryableExtensions;
using AutoMapper;

namespace Application.Certifikimet
{
    public class List
    {
        public class Query : IRequest<Result<List<CertifikimiDto>>> { }

        public class Handler : IRequestHandler<Query, Result<List<CertifikimiDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<List<CertifikimiDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var certifikimet = await _context.Certifikimet
                    .ProjectTo<CertifikimiDto>(_mapper.ConfigurationProvider)
                    .ToListAsync(cancellationToken);

                return Result<List<CertifikimiDto>>.Success(certifikimet);
            }
        }
    }
}
