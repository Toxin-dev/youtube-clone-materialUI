import React from "react";
import Proptypes from 'prop-types'
import { Typography, Stack } from "@mui/material";
import { categories } from "../utils/constants";
function Sidebar({selectedCategory = "", setSelectedCategory = (name: string) => {}}) {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((cat) => (
        <button
          className="category-btn"
          style={{
            backgroundColor: cat.name === selectedCategory ? "#FC1503" : "inherit",
            color: "white",
          }}
          key={cat.name}
          onClick={() => setSelectedCategory(cat.name)}
        >
          <span
            style={{
              color: cat.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            <cat.icon />
          </span>
          <span style={{ opacity: cat.name === selectedCategory ? "1" : "0.8" }}>
            {cat.name}
          </span>
        </button>
      ))}
    </Stack>
  );
}

export default Sidebar;

Sidebar.prototype = {
  selectedCategory: Proptypes.string,
  setSelectedCategroy: Proptypes.func
}