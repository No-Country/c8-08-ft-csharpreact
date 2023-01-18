namespace WebApiFood.Core.Models.Dtos.CommentDtos
{
    public class GetCommentDto
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public int DishId { get; set; }
        public DateTime Fecha { get; set; }
        public int CustomerId { get; set; }
    }
}
