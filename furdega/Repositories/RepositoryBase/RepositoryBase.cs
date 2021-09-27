using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Furdega.Repositories.RepositoryBase
{
    public abstract class RepositoryBase<TEntity> : IRepositoryBase<TEntity> where TEntity : BaseEntity
    {
        protected readonly DbContext Context;

        public RepositoryBase(DbContext context)
        {
            Context = context;
        }

        public virtual Task<TEntity> GetById(int id)
        {
            return Context.Set<TEntity>().SingleOrDefaultAsync(e => e.Id == id);
        }

        public virtual Task<TEntity> GetById(int id, IEnumerable<string> includePaths)
        {
            var entities = Context.Set<TEntity>().AsQueryable();

            entities = AddIncludes(entities, includePaths);

            return entities.SingleOrDefaultAsync(x => x.Id == id);
        }

        public virtual Task<List<TEntity>> GetItems(Expression<Func<TEntity, bool>> predicate = null)
        {
            return predicate != null 
                ? Context.Set<TEntity>().Where(predicate).ToListAsync()
                : Context.Set<TEntity>().ToListAsync();
        }

        public virtual async Task<TEntity> Create(TEntity entity)
        {
            Context.Set<TEntity>().Add(entity);
            await SaveChangesAsync();

            return entity;
        }

        public virtual async Task<List<TEntity>> CreateMany(IEnumerable<TEntity> entities)
        {
            Context.Set<TEntity>().AddRange(entities);
            await SaveChangesAsync();

            return entities.ToList();
        }

        public virtual Task Update(TEntity entity)
        {
            Context.Set<TEntity>().Attach(entity);
            Context.Entry(entity).State = EntityState.Modified;

            return SaveChangesAsync();
        }

        public virtual Task Delete(TEntity entity)
        {
            Context.Set<TEntity>().Remove(entity);

            return SaveChangesAsync();
        }

        public virtual Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            return Context.SaveChangesAsync(cancellationToken);
        }

        protected virtual IQueryable<TEntity> AddIncludes(IQueryable<TEntity> entities, IEnumerable<string> includePaths)
        {
            // using special overload of include that takes string
            // https://docs.microsoft.com/en-us/dotnet/api/microsoft.entityframeworkcore.entityframeworkqueryableextensions.include?view=efcore-3.1
            return includePaths.Aggregate(entities,
                (current, includePath) => current.Include(includePath));
        }
    }
}