namespace WebApiFood.Core.Models.Dtos.UserDtos
{
    public class UpdateCustomerDto
    {
        public string UserName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public string Phone { get; set; }
        public IFormFile UrlPhoto { get; set; }
        public DateTime Birthday { get; set; }
    }
}
