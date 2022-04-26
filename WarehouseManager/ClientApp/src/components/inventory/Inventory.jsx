import React, { useEffect, useState } from 'react';
import {
  Button, Grid, Box, Drawer, TextField, FormLabel, InputAdornment,
} from '@mui/material';
import { AddBox, Delete } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';

import '../../styles/Inventory.scss';

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 50,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 150,
  },
  {
    field: 'manufacturer',
    headerName: 'Manufacturer',
    width: 200,
  },
  {
    field: 'quantityInStock',
    headerName: 'Qty. In Stock',
    width: 150,
  },
  {
    field: 'quantityOnOrder',
    headerName: 'Qty. On Order',
    width: 150,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 150,
  },
  {
    field: 'location',
    headerName: 'Location',
    width: 150,
  },
];

export default function Inventory(props) {
  const [data, setData] = useState([]);
  const [addOpen, setAddOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  // Form Field State Values
  const [description, setDescription] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [qtyInStock, setQtyInStock] = useState('');
  const [price, setPrice] = useState('');
  const [locationId, setLocationId] = useState('');

  const { setTitle, baseUrl } = props;

  useEffect(() => {
    setTitle('Inventory');
    fetch(`${baseUrl}/api/GetInventoryItems`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  function handleCloseDrawer() {
    setAddOpen(false);
    setDescription('');
    setManufacturer('');
    setQtyInStock('');
    setPrice('');
    setLocationId('');
  }

  function handleDelete() {
    selectedRows.forEach((row) => {
      // TODO API call to delete rows
      console.log(row);
    });
  }

  function handleSubmit() {
    // TODO Make API call to create item and refresh items list
    // Remove decimal point from price
    const dollars = price.slice(0, price.indexOf('.'));
    const cents = price.slice(price.indexOf('.') + 1, price.length);
    const priceNum = parseInt(`${dollars}${cents}`, 10);
    console.log(priceNum);
  }

  return (
    <Grid>
      <Box className="button-container">
        <Button
          className="button"
          variant="outlined"
          color="error"
          startIcon={<Delete />}
          onClick={() => handleDelete()}
        >
          Delete
        </Button>
        <Button
          className="button"
          variant="outlined"
          color="success"
          startIcon={<AddBox />}
          onClick={() => setAddOpen(true)}
        >
          Add
        </Button>
      </Box>
      <Box className="data-grid-container">
        <DataGrid
          rows={data}
          columns={columns}
          checkboxSelection
          onSelectionModelChange={(rows) => setSelectedRows(rows)}
        />
      </Box>
      <Drawer
        anchor="right"
        open={addOpen}
        onClose={() => handleCloseDrawer()}
        PaperProps={{
          sx: { width: '30vw' },
        }}
      >
        <form
          className="add-item-form"
        >
          <FormLabel>Add Item</FormLabel>
          <TextField
            required
            type="text"
            className="form-input"
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            required
            type="text"
            className="form-input"
            label="Manufacturer"
            value={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
          />
          <TextField
            required
            className="form-input"
            label="Qty. in Stock"
            type="number"
            min="0"
            value={qtyInStock}
            onChange={(e) => setQtyInStock(e.target.value)}
          />
          <TextField
            required
            type="text"
            className="form-input"
            label="Price (use format $0.00)"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
          />
          <TextField
            required
            type="text"
            className="form-input"
            label="Location ID"
            value={locationId}
            onChange={(e) => setLocationId(e.target.value)}
          />
          <Box
            container
            className="add-button-container"
          >
            <Button
              className="form-input"
              id="submit"
              type="submit"
              onClick={() => handleSubmit()}
              size="large"
              variant="contained"
            >
              Add Item
            </Button>
          </Box>
        </form>
      </Drawer>
    </Grid>
  );
}
