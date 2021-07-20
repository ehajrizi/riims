using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Application.Interfaces;
using Application.ProfileUser;
// using Application.ProfileUser;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using DatabaseLogic;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.Profiles
{
    public class Details
    {
        public class Query : IRequest<Result<UserProfile>>
        {
            public string Email { get; set; }
        }


        public class Handler : IRequestHandler<Query, Result<UserProfile>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            private readonly IUserAccessor _userAccessor;
            public Handler(DataContext context, IMapper mapper, IUserAccessor userAccessor)
            {
                _userAccessor = userAccessor;
                _mapper = mapper;
                _context = context;
            }

            public async Task<Result<UserProfile>> Handle(Query request, CancellationToken cancellationToken)
            {
                var user = await _context.Users
                    .ProjectTo<UserProfile>(_mapper.ConfigurationProvider, 
                        new {currentUsername = _userAccessor.GetEmail()})
                    .SingleOrDefaultAsync(x => x.Email == request.Email);

                if (user == null) return null;

                return Result<UserProfile>.Success(user);
            }
        }
    }
}