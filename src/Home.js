import React from "react";
import { Box } from "@mui/system";
import { recipeSearch, options } from "./fetchData";
import { useEffect, useState } from "react";
import Search from "./Search";
import Navigation from "./Navigation";
import Display from "./Display";
import "./style.css";
import { Routes, Route } from "react-router-dom";
import ActualRecipie from "./ActualRecipie";
const Home = () => {
  const [recipe, setRecipe] = useState(false);
  const [input, setInput] = useState("");
  useEffect(() => {
    recipeData();
  }, []);
  const recipeData = async () => {
    const data = await recipeSearch(
      `https://edamam-recipe-search.p.rapidapi.com/search?q=${input}`,
      options
    );
    setRecipe(data);
  };
  const [index, setIndex] = useState(0);
  return (
    <Box>
      <Navigation />
      <Search recipeData={recipeData} input={input} setInput={setInput} />
      <Routes>
        <Route
          path="/"
          element={recipe && <Display setIndex={setIndex} recipe={recipe} />}
        />
        <Route
          path="/recipe/:id"
          element={<ActualRecipie index={index} recipe={recipe} />}
        />
      </Routes>
    </Box>
  );
};

export default Home;
