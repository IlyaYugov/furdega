using Furdega.DataAccess;
using Furdega.DataAccess.Models;
using Furdega.Repositories.RepositoryBase;

namespace Furdega.Repositories.FurnitureTypes
{
    public class FurnitureTypeRepository: RepositoryBase<FurnitureType>
    {
        public FurnitureTypeRepository(FurdegaDbContext context) : base(context)
        {
        }
    }
}