using Furdega.DataAccess.Models;
using Microsoft.EntityFrameworkCore;

namespace Furdega.DataAccess
{
    public sealed class FurdegaDbContext: DbContext
    {
        private static volatile bool _isInitialized;
        private static readonly object Mutex = new();

        public DbSet<MaterialType> MaterialTypes { get; set; }
        public DbSet<FurnitureType> FurnitureTypes { get; set; }
        public DbSet<HomePageSection> HomePageSections { get; set; }

        public FurdegaDbContext(DbContextOptions<FurdegaDbContext> options) : base(options)
        {
            if (_isInitialized)
            {
                return;
            }

            lock (Mutex)
            {
                if (_isInitialized)
                {
                    return;
                }

                Database.Migrate();

                _isInitialized = true;
            }
        }
    }
}