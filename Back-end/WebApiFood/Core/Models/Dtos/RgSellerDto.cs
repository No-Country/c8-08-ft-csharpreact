namespace WebApiFood.Core.Models.Dtos
{
    public class RgSellerDto
    {
        
        public string UserName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public string Phone { get; set; }
        public IFormFile UrlPhoto { get; set; }
        public string Adress { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
     
    }
}
