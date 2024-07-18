import React, { useState } from "react";
import Box from "@mui/material/Box";
import MangaCard from "./Card";

function CardsContainer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        p: 1,
        m: 1,
        borderRadius: 1,
      }}
    >
      <MangaCard />
      <MangaCard />
      <MangaCard />
      <MangaCard />
    </Box>
  );
}

export default CardsContainer;
