namespace WebApiFood.Core.Models.Dtos
{
    public class RgCustomerDto
    {
        public string UserName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public string Phone { get; set; }
        public IFormFile UrlPhoto { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public DateTime Birthday { get; set; }

    }
}
