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

namespace Application.Gjuhet
{
    public class List
    {
        public class Query : IRequest<Result<List<GjuhaDto>>> { }

        public class Handler : IRequestHandler<Query, Result<List<GjuhaDto>>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<List<GjuhaDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var gjuhet = await _context.Gjuhet
                    .ProjectTo<GjuhaDto>(_mapper.ConfigurationProvider)
                    .ToListAsync(cancellationToken);

                return Result<List<GjuhaDto>>.Success(gjuhet);
            }
        }
    }
}
