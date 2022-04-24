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
        private readonly SQLOrderRepository _OrderRepository;
        private readonly SQLLocationRepository _LocationRepository;
        private readonly SQLSupplierRepository _SupplierRepository;

        public DataController(  SQLInventoryItemRepository inventoryItemRepository, 
                                SQLOrderRepository orderRepository, 
                                SQLLocationRepository locationRepository, 
                                SQLSupplierRepository supplierRepository)
        {
            this._InventoryItemRepository = inventoryItemRepository;
            this._OrderRepository = orderRepository;
            this._LocationRepository = locationRepository;
            this._SupplierRepository = supplierRepository;

        }

        //InventoryItem Section
        [HttpGet("GetInventoryItems")]
        public IEnumerable<InventoryItem> GetInventoryItems()
        {
            return _InventoryItemRepository.GetInventoryItems().ToList();
        }

        [HttpGet("GetInventoryItemById/{InventoryItemId}")]
        public InventoryItem GetInventoryItemById([FromRoute] int InventoryItemId)
        {
            return _InventoryItemRepository.GetInventoryItem(InventoryItemId);
        }

        [HttpPost("AddInventoryItem")]
        public IActionResult AddInventoryItem([FromBody] InventoryItem inventoryItem)
        {
            if(inventoryItem == null)
            {
                return BadRequest(inventoryItem);
            }

            _InventoryItemRepository.Add(inventoryItem);

            return Ok(inventoryItem);
        }

        [HttpPost("UpdateInventoryItem")]
        public IActionResult UpdateInventoryItem([FromBody] InventoryItem updatedInventoryItem)
        {
            if (updatedInventoryItem == null)
            {
                return BadRequest(updatedInventoryItem);
            }

            _InventoryItemRepository.Update(updatedInventoryItem);

            return Ok(updatedInventoryItem);
        }

        [HttpPost("DeleteInventoryItem/{deletedInventoryItemId}")]
        public IActionResult DeleteInventoryItem([FromRoute] int deletedInventoryItemId)
        {
            if (deletedInventoryItemId == 0)
            {
                return BadRequest(deletedInventoryItemId);
            }

            InventoryItem deletedInventoryItem = _InventoryItemRepository.Delete(deletedInventoryItemId);

            return Ok(deletedInventoryItem);
        }

        //Order Section
        [HttpGet("GetOrders")]
        public IEnumerable<Order> GetOrders()
        {
            return _OrderRepository.GetOrders().ToList();
        }

        [HttpGet("GetOrderById/{OrderId}")]
        public Order GetOrderById([FromRoute] int OrderId)
        {
            return _OrderRepository.GetOrder(OrderId);
        }

        [HttpPost("AddOrder")]
        public IActionResult AddOrder([FromBody] Order order)
        {
            if (order == null)
            {
                return BadRequest(order);
            }

            _OrderRepository.Add(order);

            return Ok(order);
        }

        [HttpPost("UpdateOrder")]
        public IActionResult UpdateOrder([FromBody] Order updatedOrder)
        {
            if (updatedOrder == null)
            {
                return BadRequest(updatedOrder);
            }

            _OrderRepository.Update(updatedOrder);

            return Ok(updatedOrder);
        }

        [HttpPost("DeleteOrder/{deletedOrderId}")]
        public IActionResult DeleteOrder([FromRoute] int deletedOrderId)
        {
            if (deletedOrderId == 0)
            {
                return BadRequest(deletedOrderId);
            }

            Order deletedOrder = _OrderRepository.Delete(deletedOrderId);

            return Ok(deletedOrder);
        }

        //Location Section
        [HttpGet("GetOrders")]
        public IEnumerable<Location> GetLocations()
        {
            return _LocationRepository.GetLocations().ToList();
        }

        [HttpGet("GetLocationById/{LocationId}")]
        public Location GetLocationById([FromRoute] int LocationId)
        {
            return _LocationRepository.GetLocation(LocationId);
        }

        [HttpPost("AddLocation")]
        public IActionResult AddLocation([FromBody] Location location)
        {
            if (location == null)
            {
                return BadRequest(location);
            }

            _LocationRepository.Add(location);

            return Ok(location);
        }

        [HttpPost("UpdateLocation")]
        public IActionResult UpdateLocation([FromBody] Location updatedLocation)
        {
            if (updatedLocation == null)
            {
                return BadRequest(updatedLocation);
            }

            _LocationRepository.Update(updatedLocation);

            return Ok(updatedLocation);
        }

        [HttpPost("DeleteLocation/{deletedLocationId}")]
        public IActionResult DeleteLocation([FromRoute] int deletedLocationId)
        {
            if (deletedLocationId == 0)
            {
                return BadRequest(deletedLocationId);
            }

            Location deletedLocation = _LocationRepository.Delete(deletedLocationId);

            return Ok(deletedLocation);
        }

        //Supplier Section
        [HttpGet("GetSuppliers")]
        public IEnumerable<Supplier> GetSuppliers()
        {
            return _SupplierRepository.GetSuppliers().ToList();
        }

        [HttpGet("GetSupplierById/{SupplierId}")]
        public Supplier GetSupplierById([FromRoute] int SupplierId)
        {
            return _SupplierRepository.GetSupplier(SupplierId);
        }

        [HttpPost("AddSupplier")]
        public IActionResult AddSupplier([FromBody] Supplier supplier)
        {
            if (supplier == null)
            {
                return BadRequest(supplier);
            }

            _SupplierRepository.Add(supplier);

            return Ok(supplier);
        }

        [HttpPost("UpdateSupplier")]
        public IActionResult UpdateSupplier([FromBody] Supplier updatedSupplier)
        {
            if (updatedSupplier == null)
            {
                return BadRequest(updatedSupplier);
            }

            _SupplierRepository.Update(updatedSupplier);

            return Ok(updatedSupplier);
        }

        [HttpPost("DeleteSupplier/{deletedSupplierId}")]
        public IActionResult DeleteSupplier([FromRoute] int deletedSupplierId)
        {
            if (deletedSupplierId == 0)
            {
                return BadRequest(deletedSupplierId);
            }

            Supplier deletedSupplier = _SupplierRepository.Delete(deletedSupplierId);

            return Ok(deletedSupplier);
        }
    }
}
