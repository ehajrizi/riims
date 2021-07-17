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

namespace Application.Specializimet
{
    public class Details
    {
        public class Query : IRequest<Result<SpecializimiDto>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<SpecializimiDto>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<SpecializimiDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var specializimi = await _context.Specializimet
                    .ProjectTo<SpecializimiDto>(_mapper.ConfigurationProvider)
                    .FirstOrDefaultAsync(x => x.Id == request.Id);

                return Result<SpecializimiDto>.Success(specializimi);
            }
        }
    }
}
