namespace WarehouseManager.Models
{
    // [Keyless]
    public class OrderedItem
    {
        public Order Order { get; set; }
        public InventoryItem InventoryItem { get; set; }
        public int Quantity { get; set; }
    }
}
