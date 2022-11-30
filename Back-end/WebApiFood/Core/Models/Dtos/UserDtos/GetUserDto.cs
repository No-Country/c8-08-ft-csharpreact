using WebApiFood.Entities;

namespace WebApiFood.Core.Models.Dtos.UserDtos
{
    public class GetUserDto
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public bool Activo { get; set; }
        public DateTime Create { get; set; }
        public DateTime Update { get; set; }
        public int RoleId { get; set; }
        public RoleDto Role { get; set; }

    }





}
