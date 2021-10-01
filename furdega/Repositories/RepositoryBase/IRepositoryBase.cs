using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading;
using System.Threading.Tasks;

namespace Furdega.Repositories.RepositoryBase
{
    public interface IRepositoryBase<TEntity> where TEntity : BaseEntity
    {
        Task<TEntity> GetById(int id);

        Task<TEntity> GetById(int id, IEnumerable<string> includePaths);

        Task<TEntity> FirstOrDefault(Expression<Func<TEntity, bool>> predicate = null);

        Task<List<TEntity>> GetItems(Expression<Func<TEntity, bool>> predicate = null);

        Task<TEntity> Create(TEntity entity);

        Task Update(TEntity entity);

        Task Delete(TEntity entity);

        Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
    }
}