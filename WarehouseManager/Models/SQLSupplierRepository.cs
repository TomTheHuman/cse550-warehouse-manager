using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WarehouseManager.Data;

namespace WarehouseManager.Models
{
    public class SQLSupplierRepository
    {
        private readonly ApplicationDbContext context;

        public SQLSupplierRepository(ApplicationDbContext context)
        {
            this.context = context;
        }

        public Supplier Add(Supplier supplier)
        {
            context.Suppliers.Add(supplier);
            context.SaveChanges();
            return supplier;
        }

        public Supplier Delete(int id)
        {
            Supplier supplier = context.Suppliers.Find(id);
            if (supplier != null)
            {
                context.Suppliers.Remove(supplier);
                context.SaveChanges();
            }
            return supplier;
        }

        public IEnumerable<Supplier> GetSuppliers()
        {
            return context.Suppliers;
        }

        public Supplier GetSupplier(int id)
        {
            return context.Suppliers.Find(id);
        }

        public Supplier Update(Supplier supplierChanges)
        {
            var supplier = context.Suppliers.Attach(supplierChanges);
            supplier.State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            context.SaveChanges();
            return supplierChanges;
        }
    }
}
