using Application.Publikimet; 
using Application.Eksperiencat;
using Application.MbikeqyresitTemave;
using Application.Specializimet;
using Application.Edukimet;
using Application.Core;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using DatabaseLogic;

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

            return services;
        }
    }
}