import React, { useEffect, useState } from 'react';
import { Button, Grid, Box } from '@mui/material';
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

export default function Inventory() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([{
      id: 1,
      description: 'Test',
      manufacturer: 'ACME',
      quantityInStock: 10,
      quantityOnOrder: 15,
      price: '$10.50',
    }]);
  }, []);

  return (
    <Grid>
      <Box className="button-container">

        <Button
          className="button"
          variant="outlined"
          color="error"
          startIcon={<Delete />}
        >
          Delete
        </Button>
        <Button
          className="button"
          variant="outlined"
          color="success"
          startIcon={<AddBox />}
        >
          Add
        </Button>
      </Box>
      <Box className="data-grid-container">
        <DataGrid
          rows={data}
          columns={columns}
        />
      </Box>
    </Grid>
  );
}
