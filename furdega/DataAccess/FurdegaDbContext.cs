using System.Collections.Generic;
using Furdega.DataAccess.Models;
using Microsoft.EntityFrameworkCore;

namespace Furdega.DataAccess
{
    public sealed class FurdegaDbContext: DbContext
    {
        private static volatile bool _isInitialized;
        private static readonly object Mutex = new();

        public DbSet<MaterialBrand> MaterialBrands { get; set; }
        public DbSet<FurnitureType> FurnitureTypes { get; set; }
        public DbSet<HomePageSection> HomePageSections { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Furniture> Furniture { get; set; }
        public DbSet<Material> Materials { get; set; }
        public DbSet<User> Users { get; set; }

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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            AddDefaultValues(modelBuilder);
        }

        private static void AddDefaultValues(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                        .HasData(GetDefaultUser());
        }

        private static List<User> GetDefaultUser()
        {
            return new List<User>
            {
                new User
                {
                    Id = 1,
                    Login = "admin",
                    Password = "QwErTy!@#$%^&*(QaZwSx"
                },
            };
        }
    }
}