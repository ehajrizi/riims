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

namespace Application.Gjuhet
{
    public class Details
    {
        public class Query : IRequest<Result<GjuhaDto>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<GjuhaDto>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<GjuhaDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var gjuha = await _context.Gjuhet
                    .ProjectTo<GjuhaDto>(_mapper.ConfigurationProvider)
                    .FirstOrDefaultAsync(x => x.Id == request.Id);

                return Result<GjuhaDto>.Success(gjuha);
            }
        }
    }
}
