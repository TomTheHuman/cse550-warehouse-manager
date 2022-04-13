using System;
using System.Globalization;

namespace WarehouseManager.Models
{
    public class Order
    {
        public int Id { get; set; }
        public Supplier Supplier { get; set; }
        public string OrderType { get; set; }
        public DateTime CreatedDate { get; set; }
        public string Status { get; set; }
        public DateTime CompletedDate { get; set; }
        public ApplicationUser CompletedBy { get; set; }

    }
}
