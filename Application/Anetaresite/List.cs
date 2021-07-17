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

namespace Application.Anetaresite
{
    public class List
    {
        public class Query : IRequest<Result<List<AnetaresiaDto>>> { }

        public class Handler : IRequestHandler<Query, Result<List<AnetaresiaDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<List<AnetaresiaDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var anetaresite = await _context.Anetaresite
                    .ProjectTo<AnetaresiaDto>(_mapper.ConfigurationProvider)
                    .ToListAsync(cancellationToken);

                return Result<List<AnetaresiaDto>>.Success(anetaresite);
            }
        }
    }
}