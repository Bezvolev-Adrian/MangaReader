import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ResponsiveAppBar from "./components/NavBar";
import RecipeReviewCard from "./components/Card";
import Box from "@mui/material/Box";
import CardsContainer from "./components/CardContainer";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <CardsContainer />
    </>
  );
}

export default App;
