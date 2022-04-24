using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WarehouseManager.Data;

namespace WarehouseManager.Models
{
    public class SQLLocationRepository
    {
        private readonly ApplicationDbContext context;

        public SQLLocationRepository(ApplicationDbContext context)
        {
            this.context = context;
        }

        public Location Add(Location location)
        {
            context.Locations.Add(location);
            context.SaveChanges();
            return location;
        }

        public Location Delete(int id)
        {
            Location location = context.Locations.Find(id);
            if (location != null)
            {
                context.Locations.Remove(location);
                context.SaveChanges();
            }
            return location;
        }

        public IEnumerable<Location> GetLocations()
        {
            return context.Locations;
        }

        public Location GetLocation(int id)
        {
            return context.Locations.Find(id);
        }

        public Location Update(Location locationChanges)
        {
            var location = context.Locations.Attach(locationChanges);
            location.State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            context.SaveChanges();
            return locationChanges;
        }
    }
}
