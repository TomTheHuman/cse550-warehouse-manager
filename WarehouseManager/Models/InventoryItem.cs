namespace WarehouseManager.Models
{
    public class InventoryItem
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public string Manufacturer { get; set; }
        public int QuantityInStock { get; set; }
        public int QuantityOnOrder { get; set; }
        public int Price { get; set; }
        public Location Location { get; set; }
    }
}
