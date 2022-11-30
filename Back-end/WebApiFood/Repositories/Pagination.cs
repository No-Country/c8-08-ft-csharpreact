namespace WebApiFood.Repositories
{
    public class Pagination<T>:Response<T>
    {
        public int PageNumber { get; set; }
        public int TotalPage { get; set; }
        public int TotalCount { get; set; }
        public bool HasPreviousPage => PageNumber > 1;
        public bool HasNextPage => PageNumber < TotalPage;
    }
}
