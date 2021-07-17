using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using DatabaseLogic;
using Application.Core;
using AutoMapper.QueryableExtensions;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace Application.Anetaresite
{
    public class Details
    {
        public class Query : IRequest<Result<AnetaresiaDto>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<AnetaresiaDto>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<AnetaresiaDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var anetaresia = await _context.Anetaresite
                    .ProjectTo<AnetaresiaDto>(_mapper.ConfigurationProvider)
                    .FirstOrDefaultAsync(x => x.Id == request.Id);

                return Result<AnetaresiaDto>.Success(anetaresia);
            }
        }
    }
}