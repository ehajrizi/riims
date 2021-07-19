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

namespace Application.Edukimet
{
    public class List
    {
        public class Query : IRequest<Result<List<EdukimiDto>>> { }

        public class Handler : IRequestHandler<Query, Result<List<EdukimiDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<List<EdukimiDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var edukimet = await _context.Edukimet
                    .ProjectTo<EdukimiDto>(_mapper.ConfigurationProvider)
                    .ToListAsync(cancellationToken);

                return Result<List<EdukimiDto>>.Success(edukimet);
            }
        }
    }
}
