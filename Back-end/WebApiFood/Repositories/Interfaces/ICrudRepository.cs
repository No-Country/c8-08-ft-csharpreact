namespace WebApiFood.Repositories.Interfaces
{
    public interface ICrudRepository<T> where T : class
    {
        Task<IEnumerable<T>> GetAll();
        Task Insert(T entity);
        Task Delete(T entity);
        Task Update(T entity);
        Task<int> Save();
    }
}
