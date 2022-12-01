using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace WebApiFood.ConfigStarup.Authentication
{
    public static class Auth0
    {
        public static IServiceCollection AddAuth0(this IServiceCollection services,IConfiguration configuration)
        {
            var key = Encoding.ASCII.GetBytes(configuration.GetSection("Jwt:Key").Value);
            var Issuer = configuration.GetSection("Jwt:Issuer").Value;
            var Audience = configuration.GetSection("Jwt:Audience").Value;

            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme =  JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(x =>
            {
                x.Events = new JwtBearerEvents
                {
                    OnTokenValidated = context =>
                    {
                        var userId = context.Principal.Identity.Name;
                        return Task.CompletedTask;
                    },

                    OnAuthenticationFailed = context =>
                    {
                        if (context.Exception.GetType() == typeof(SecurityTokenExpiredException))
                        {
                            context.Response.Headers.Add("Token-Expired", "true");
                        }
                        return Task.CompletedTask;
                    }
                };
                x.RequireHttpsMetadata = false;
                x.SaveToken = false;
                x.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = true,
                    ValidIssuer = Issuer,
                    ValidateAudience = true,
                    ValidAudience = Audience,
                    ValidateLifetime = true,
                    ClockSkew = TimeSpan.Zero
                };
            });
            return services;
        }
    }
}
