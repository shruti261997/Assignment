import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddProductList from "./AddProductList";

export default function AddProducts() {
  const theme = createTheme();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [prodArray, setProdArray] = useState([]);

  const handleAddItem = (e) => {
    let obj = {};
    obj = { ...obj, 'title': title, 'description': description };
    setProdArray([...prodArray, obj]);
    setTitle("");
    setDescription("");
   
  };
  
console.log(prodArray,'prod',title,description)
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5" color="primary">
              Add Products
            </Typography>

            <Box component="form" sx={{ mt: 4 }}>
              
              <TextField
                margin="normal"
                required
                fullWidth
                id="title"
                label="Title"
                type="text"
                name="title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="description"
                label="Description"
                type="text"
                name="description"
                value={description}
                multiline
                rows={2}
                maxRows={Infinity}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleAddItem}
              >
                AddItems
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      <AddProductList productArray={prodArray} />
    </>
  );
}
