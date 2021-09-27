using Furdega.DataAccess.Models;
using Microsoft.EntityFrameworkCore;

namespace Furdega.DataAccess
{
    public sealed class FurdegaDbContext: DbContext
    {
        public DbSet<MaterialType> MaterialTypes { get; set; }
        public DbSet<FurnitureType> FurnitureTypes { get; set; }

        public FurdegaDbContext(DbContextOptions<FurdegaDbContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }
    }
}