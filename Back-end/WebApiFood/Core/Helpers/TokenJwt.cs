using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using WebApiFood.Core.Models.Dtos;
using WebApiFood.Entities;

namespace WebApiFood.Core.Helpers
{
    public class TokenJwt
    {
        public static string CrearToken(User user,IConfiguration configuration)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            byte[] key = Encoding.ASCII.GetBytes(configuration.GetSection("Jwt:Key").Value);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject= new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Email),
                    new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                    new Claim(ClaimTypes.Role,user.RoleId.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),SecurityAlgorithms.HmacSha512),
                Issuer = configuration.GetSection("Jwt:Issuer").Value,
                Audience = configuration.GetSection("Jwt:Audience").Value,
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);

            return tokenString;
        }

        public static int GetUserId(IEnumerable<Claim> claims)
        {
            var userId = 0;
            foreach (var claim in claims)
            {
                if (claim.Type.Equals("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"))
                {
                    userId = int.Parse(claim.Value);
                }
            }
            return userId;
        }
    }
}
