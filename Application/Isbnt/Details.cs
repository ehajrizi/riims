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

namespace Application.Isbnt
{
    public class Details
    {
        public class Query : IRequest<Result<IsbnDto>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<IsbnDto>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<IsbnDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var isbn = await _context.Isbnt
                    .ProjectTo<IsbnDto>(_mapper.ConfigurationProvider)
                    .FirstOrDefaultAsync(x => x.Id == request.Id);

                return Result<IsbnDto>.Success(isbn);
            }
        }
    }
}
