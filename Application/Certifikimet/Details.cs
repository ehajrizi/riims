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

namespace Application.Certifikimet
{
    public class Details
    {
        public class Query : IRequest<Result<CertifikimiDto>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<CertifikimiDto>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<CertifikimiDto>> Handle(Query request, CancellationToken cancellationToken)
            {
                var certifikimi = await _context.Certifikimet
                    .ProjectTo<CertifikimiDto>(_mapper.ConfigurationProvider)
                    .FirstOrDefaultAsync(x => x.Id == request.Id);

                return Result<CertifikimiDto>.Success(certifikimi);
            }
        }
    }
}
