using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WarehouseManager.Data;
using WarehouseManager.Models;

namespace WarehouseManager.Controllers
{
    [Route("api/")]
    public class DataController : Controller
    {

        private readonly SQLInventoryItemRepository _InventoryItemRepository;

        public DataController(SQLInventoryItemRepository inventoryItemRepository)
        {
            this._InventoryItemRepository = inventoryItemRepository;
        }

        [HttpGet("GetInventoryItems")]
        public IEnumerable<InventoryItem> GetInventoryItems()
        {
            return _InventoryItemRepository.GetInventoryItems().ToList();
        }
    }
}
