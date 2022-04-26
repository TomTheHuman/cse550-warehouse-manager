import { AddBox, Delete, Save } from '@mui/icons-material';
import {
  Box, Button, Drawer, FormLabel, Grid, IconButton, List, ListItem, ListItemText, TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import '../../styles/Suppliers.scss';

export default function Inventory(props) {
  const [suppliers, setSuppliers] = useState([]);
  const [addOpen, setAddOpen] = useState(false);
  const [newSupplier, setNewSupplier] = useState('');

  const { setTitle, baseUrl } = props;

  useEffect(() => {
    setTitle('Suppliers');
    fetch(`${baseUrl}/api/GetSuppliers`)
      .then((res) => res.json())
      .then((res) => setSuppliers(res));
  }, []);

  function handleCloseDrawer() {
    setAddOpen(false);
    setNewSupplier('');
  }

  function handleAddSupplier() {
    // TODO API Call to add supplier
    setNewSupplier('');
  }

  function handleDeleteSupplier(id) {
    // TODO API Call to delete supplier
    console.log(id);
  }

  return (
    <Grid>
      <Box className="button-container">
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
      <Box className="list-container">
        <List
          className="supplier-list"
        >
          {suppliers.map((supplier) => (
            <ListItem
              key={supplier.id}
              divider
              secondaryAction={(
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDeleteSupplier(supplier.id)}
                >
                  <Delete />
                </IconButton>
            )}
            >
              <ListItemText
                primary={supplier.name}
              />
            </ListItem>
          ))}
        </List>
      </Box>
      <Drawer
        anchor="right"
        open={addOpen}
        onClose={() => handleCloseDrawer()}
        PaperProps={{
          sx: { width: '30vw' },
        }}
      >
        <Box
          className="add-supplier-container"
        >
          <FormLabel>Add Supplier</FormLabel>
          <Box className="drawer-item">
            <TextField
              required
              type="text"
              label="Supplier Name"
              value={newSupplier}
              onChange={(e) => setNewSupplier(e.target.value)}
              sx={{ width: '100%' }}
            />
          </Box>

          <Box
            className="drawer-item"
            sx={{
              display: 'flex',
              flexDirection: 'row-reverse',
            }}
          >
            <Button
              className="button"
              variant="outlined"
              color="success"
              startIcon={<Save />}
              onClick={() => handleAddSupplier()}
            >
              Save
            </Button>
          </Box>

        </Box>
      </Drawer>
    </Grid>
  );
}
