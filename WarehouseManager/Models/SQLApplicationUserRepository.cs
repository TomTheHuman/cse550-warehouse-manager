using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WarehouseManager.Data;

namespace WarehouseManager.Models
{
    public class SQLApplicationUserRepository
    {
        private readonly ApplicationDbContext context;

        public SQLApplicationUserRepository(ApplicationDbContext context)
        {
            this.context = context;
        }

        public ApplicationUser Add(ApplicationUser user)
        {
            context.Users.Add(user);
            context.SaveChanges();
            return user;
        }

        public ApplicationUser Delete(int id)
        {
            ApplicationUser user = context.Users.Find(id);
            if (user != null)
            {
                context.Users.Remove(user);
                context.SaveChanges();
            }
            return user;
        }

        public IEnumerable<ApplicationUser> GetUsers()
        {
            return context.Users;
        }

        public ApplicationUser GetUser(int id)
        {
            return context.Users.Find(id);
        }

        public ApplicationUser Update(ApplicationUser userChanges)
        {
            var user = context.Users.Attach(userChanges);
            user.State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            context.SaveChanges();
            return userChanges;
        }
    }
}
