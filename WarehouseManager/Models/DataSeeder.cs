using System;
using System.Collections.Generic;
using WarehouseManager.Data;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;


namespace WarehouseManager.Models
{
    public class DataSeeder
    {
        private readonly ApplicationDbContext applicationDbContext;
        private readonly ApiAuthorizationDbContext<ApplicationUser> apiAuthorizationDbContext;

        public DataSeeder(ApplicationDbContext applicationDbContext, ApiAuthorizationDbContext<ApplicationUser> apiAuthorizationDbContext)
        {
            this.applicationDbContext = applicationDbContext;
            this.apiAuthorizationDbContext = apiAuthorizationDbContext;
        }

        public void Seed()
        {
            if(apiAuthorizationDbContext.Users.Find(0) == null)
            {
                var users = new List<ApplicationUser>()
                {
                    // Create Admin User
                    new ApplicationUser()
                    {
                        Id = "0",
                        UserName = "admin",
                        PasswordHash = "admin",
                        AccountType = "admin"
                    },
                    new ApplicationUser()
                    {
                        Id = "1",
                        UserName = "joe",
                        PasswordHash = "joe",
                        AccountType = "user"
                    },
                    new ApplicationUser()
                    {
                        Id = "2",
                        UserName = "jane",
                        PasswordHash = "jane",
                        AccountType = "admin"
                    }

                };
            }
        }
    }
}
