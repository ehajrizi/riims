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

namespace Application.Publikimet
{
    public class List
    {
        public class Query : IRequest<Result<List<PublikimiDto>>> { }

        public class Handler : IRequestHandler<Query, Result<List<PublikimiDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<List<PublikimiDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var publikimet = await _context.Publikimet
                    .ProjectTo<PublikimiDto>(_mapper.ConfigurationProvider)
                    .ToListAsync(cancellationToken);

                return Result<List<PublikimiDto>>.Success(publikimet);
            }
        }
    }
}
