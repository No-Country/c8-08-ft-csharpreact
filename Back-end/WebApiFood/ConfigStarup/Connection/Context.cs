using Microsoft.EntityFrameworkCore;
using WebApiFood.DataAcces;

namespace WebApiFood.ConfigStarup.Connection
{
    public static class Context
    {
        public static IServiceCollection AddContext(this IServiceCollection services,IConfiguration configuration)
        {
            services.AddDbContext<AppDbContext>(options=>
                                                options.UseSqlServer(configuration.GetConnectionString("ConnectionSqlServer")));
            return services;
        }
    }
}
