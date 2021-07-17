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

namespace Application.Donatoret
{
    public class Details
    {
        public class Query : IRequest<Result<DonatoriDto>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<DonatoriDto>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<DonatoriDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var donatori = await _context.Donatoret
                    .ProjectTo<DonatoriDto>(_mapper.ConfigurationProvider)
                    .FirstOrDefaultAsync(x => x.Id == request.Id);

                return Result<DonatoriDto>.Success(donatori);
            }
        }
    }
}
