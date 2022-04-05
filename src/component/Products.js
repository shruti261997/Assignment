import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ProductCard from "./ProductCard";
import { productData } from "./productData";
import Menubar from "./Menubar";

export default function Products() {
  return (
    <>
     <Menubar/>
      <Box sx={{ flexGrow: 1, mt: 4 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {productData.map((item, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <ProductCard title={item.title} heading={item.heading} description={item.description} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
