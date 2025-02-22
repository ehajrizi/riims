using Application.Core;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using DatabaseLogic;
using Application.Interfaces;
using Infrastructure.Security;
using Infrastructure.Photos;

namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
        {
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "API", Version = "v1" });
            });
            services.AddDbContext<DataContext>(opt =>
            {
                opt.UseSqlite(config.GetConnectionString("DefaultConnection"));
            });
            services.AddCors(opt =>
            {
                opt.AddPolicy("CorsPolicy", policy =>
                {
                    policy.AllowAnyMethod().AllowAnyHeader().WithOrigins("http://localhost:3000");
                });
            });
            
            services.AddMediatR(typeof(Application.Eksperiencat.List.Handler).Assembly);
            services.AddAutoMapper(typeof(MappingProfiles).Assembly);
            services.AddMediatR(typeof(Application.Publikimet.List.Handler).Assembly);
            services.AddMediatR(typeof(Application.MbikeqyresitTemave.List.Handler).Assembly);
            services.AddMediatR(typeof(Application.Specializimet.List.Handler).Assembly);
            services.AddMediatR(typeof(Application.Edukimet.List.Handler).Assembly);
            services.AddMediatR(typeof(Application.Certifikimet.List.Handler).Assembly);
            services.AddMediatR(typeof(Application.Projektet.List.Handler).Assembly);
            services.AddMediatR(typeof(Application.Gjuhet.List.Handler).Assembly);
            services.AddMediatR(typeof(Application.Anetaresite.List.Handler).Assembly);
            services.AddMediatR(typeof(Application.HonorsandAwards.List.Handler).Assembly);
            services.AddMediatR(typeof(Application.Donatoret.List.Handler).Assembly);
            services.AddMediatR(typeof(Application.Pjesemarresit.List.Handler).Assembly);
            services.AddMediatR(typeof(Application.PjesemarresitPublikimet.List.Handler).Assembly);
            services.AddScoped<IUserAccessor, UserAccessor>();
            services.AddMediatR(typeof(Application.Isbnt.List.Handler).Assembly);
            services.Configure<CloudinarySettings>(config.GetSection("Cloudinary"));
            services.AddScoped<IPhotoAccessor,PhotoAccessor> ();


            

            return services;
        }
    }
}