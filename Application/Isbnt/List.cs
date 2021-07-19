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

namespace Application.Isbnt
{
    public class List
    {
        public class Query : IRequest<Result<List<IsbnDto>>> { }

        public class Handler : IRequestHandler<Query, Result<List<IsbnDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<List<IsbnDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var isbn = await _context.Isbnt
                    .ProjectTo<IsbnDto>(_mapper.ConfigurationProvider)
                    .ToListAsync(cancellationToken);

                return Result<List<IsbnDto>>.Success(isbn);
            }
        }
    }
}
