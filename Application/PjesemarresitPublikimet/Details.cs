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

namespace Application.PjesemarresitPublikimet
{
    public class Details
    {
        public class Query : IRequest<Result<PjesemarresitPublikimiDto>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<PjesemarresitPublikimiDto>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<PjesemarresitPublikimiDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var pjesemarresitPublikimi = await _context.PjesemarresitPublikimet
                    .ProjectTo<PjesemarresitPublikimiDto>(_mapper.ConfigurationProvider)
                    .FirstOrDefaultAsync(x => x.Id == request.Id);

                return Result<PjesemarresitPublikimiDto>.Success(pjesemarresitPublikimi);
            }
        }
    }
}
