using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WarehouseManager.Data;

namespace WarehouseManager.Models
{
    public class SQLInventoryItemRepository
    {
        private readonly ApplicationDbContext context;

        public SQLInventoryItemRepository(ApplicationDbContext context)
        {
            this.context = context;
        }

        public InventoryItem Add(InventoryItem inventoryItem)
        {
            context.InventoryItems.Add(inventoryItem);
            context.SaveChanges();
            return inventoryItem;
        }

        public InventoryItem Delete(int id)
        {
            InventoryItem inventoryItem = context.InventoryItems.Find(id);
            if(inventoryItem != null)
            {
                context.InventoryItems.Remove(inventoryItem);
                context.SaveChanges();
            }
            return inventoryItem;
        }

        public IEnumerable<InventoryItem> GetInventoryItems()
        {
            return context.InventoryItems;
        }

        public InventoryItem GetInventoryItem(int id)
        {
            return context.InventoryItems.Find(id);
        }
        
        public InventoryItem Update(InventoryItem inventoryItemChanges)
        {
            var inventoryItem = context.InventoryItems.Attach(inventoryItemChanges);
            inventoryItem.State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            context.SaveChanges();
            return inventoryItemChanges;
        }
    }
}
