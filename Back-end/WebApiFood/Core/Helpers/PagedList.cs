namespace WebApiFood.Core.Helpers
{
    public class PagedList<T>:List<T>
    {
        public int PageNumber { get; set; }
        public int TotalPage { get; set; }
        public int TotalCount { get; set; }
        public bool HasPreviousPage => PageNumber > 1;
        public bool HasNextPage => PageNumber < TotalPage;
        public PagedList(List<T> item, int count, int pageNumber, int pageSize)
        {
            PageNumber = pageNumber;
            TotalCount = count;
            TotalPage = (int)Math.Ceiling(count / (double)pageSize);
            AddRange(item);
        }

        public static PagedList<T> Crear(IQueryable<T> sourse, int PageNumber, int PageSize)
        {
            int count = sourse.Count();
            var item = sourse.Skip((PageNumber - 1) * PageSize).Take(PageSize).ToList();
            return new PagedList<T>(item, count, PageNumber, PageSize);
        }
    }
}
