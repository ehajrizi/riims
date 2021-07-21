// using System.Threading;
// using System.Threading.Tasks;
// using Application.Core;
// using Application.Interfaces;
// using DatabaseLogic;
// using MediatR;
// using Microsoft.EntityFrameworkCore;


// namespace Application.Photos
// {
//     public class Delete
//     {
//         public class Command : IRequest<Result<Unit>>
//         {
//             public string Id { get; set; }

//         }

//         public class Handler : IRequestHandler<Command, Result<Unit>>
//         {
//             private readonly DataContext _context;
//             private readonly IPhotoAccessor _photoAccessor;
//             private readonly IUserAccessor _userAccessor;
//             public Handler(DataContext context, IPhotoAccessor photoAccessor, IUserAccessor userAccessor)
//             {
//                 _context = context;
//                 _photoAccessor = photoAccessor;
//                 _userAccessor = userAccessor;

//             }

//             public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
//             {
//                var user = await _context.Users.Include(p => p.Photos)
//                .FirstOrDefaultAsync (x=> x.Email == _userAccessor.GetEmail());
//                if(user == null) return null;

                
//                 var photo = user.Photos.FirstOrDefault(x => x.Id == request.Id);

//                 if(photo == null) return null;

//                 var result = await _photoAccessor.DeletePhoto(photo.Id);

//                 if(result == null) return Result<Unit>.Failure("Problem deleting photo from Cloudinary");

//                 user.Photos.Remove(photo);

//                 var success = await _context.SaveChangesAsync() >0;
//                 if (success) return Result <Unit>.Success(Unit.Value);

//                 return Result<Unit>.Failure("Problem deleting photo API ");


//             }
//         }
//     }
// }