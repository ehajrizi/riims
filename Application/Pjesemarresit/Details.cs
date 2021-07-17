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

namespace Application.Pjesemarresit
{
    public class Details
    {
        public class Query : IRequest<Result<PjesemarresitDto>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<PjesemarresitDto>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<PjesemarresitDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var pjesemarresit = await _context.Pjesemarresit
                    .ProjectTo<PjesemarresitDto>(_mapper.ConfigurationProvider)
                    .FirstOrDefaultAsync(x => x.Id == request.Id);

                return Result<PjesemarresitDto>.Success(pjesemarresit);
            }
        }
    }
}
