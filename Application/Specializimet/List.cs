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

namespace Application.Specializimet
{
    public class List
    {
        public class Query : IRequest<Result<List<SpecializimiDto>>> { }

        public class Handler : IRequestHandler<Query, Result<List<SpecializimiDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<List<SpecializimiDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var specializimet = await _context.Specializimet
                    .ProjectTo<SpecializimiDto>(_mapper.ConfigurationProvider)
                    .ToListAsync(cancellationToken);

                return Result<List<SpecializimiDto>>.Success(specializimet);
            }
        }
    }
}
