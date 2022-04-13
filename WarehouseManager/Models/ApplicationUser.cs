using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WarehouseManager.Models
{
    public class ApplicationUser : IdentityUser
    {
        // Used for authenticating routes on front end
        public string AccountType { get; set; }
    }
}
