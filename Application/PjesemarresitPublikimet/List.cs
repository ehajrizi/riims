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

namespace Application.PjesemarresitPublikimet
{
    public class List
    {
        public class Query : IRequest<Result<List<PjesemarresitPublikimiDto>>> { }

        public class Handler : IRequestHandler<Query, Result<List<PjesemarresitPublikimiDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<List<PjesemarresitPublikimiDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var pjesemarresitPublikimet = await _context.PjesemarresitPublikimet
                    .ProjectTo<PjesemarresitPublikimiDto>(_mapper.ConfigurationProvider)
                    .ToListAsync(cancellationToken);

                return Result<List<PjesemarresitPublikimiDto>>.Success(pjesemarresitPublikimet);
            }
        }
    }
}
