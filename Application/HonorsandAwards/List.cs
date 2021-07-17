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

namespace Application.HonorsandAwards
{
    public class List
    {
        public class Query : IRequest<Result<List<HonorsandAwardsDto>>> { }

        public class Handler : IRequestHandler<Query, Result<List<HonorsandAwardsDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<List<HonorsandAwardsDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var honorsandAwards = await _context.HonorsandAwards
                    .ProjectTo<HonorsandAwardsDto>(_mapper.ConfigurationProvider)
                    .ToListAsync(cancellationToken);

                return Result<List<HonorsandAwardsDto>>.Success(honorsandAwards);
            }
        }
    }
}
