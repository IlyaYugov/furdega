using System;
using Furdega.Repositories.RepositoryBase;

namespace Furdega.DataAccess.Models
{
    public class Employee: BaseEntity
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Description { get; set; }
        public Guid ImageId { get; set; }
        public string ImageUrl { get; set; }
    }
}