using Furdega.DataAccess;
using Furdega.Repositories.RepositoryBase;

namespace Furdega.Repositories
{
    public class FurdegaRepository<TEntity> : RepositoryBase<TEntity> where TEntity : BaseEntity
    {
        protected new readonly FurdegaDbContext Context;

        public FurdegaRepository(FurdegaDbContext context) : base(context)
        {
            Context = context;
        }
    }
}