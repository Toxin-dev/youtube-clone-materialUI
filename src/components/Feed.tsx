import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFrom";

interface Video {
  vid: { id: { videoID: 1 } };
}
const Feed: React.FC = () => {
  const [selectedCategory, setSelctedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const data = fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then(
      (data) => setVideos(data.items)
    );
  }, [selectedCategory]);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "93.7vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelctedCategory}
        />
        <Typography variant="body2" sx={{ mt: 1.5, color: "#fff" }}>
          Copyright 2022 rakshyak satpahty youtube clone
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight={"bold"}
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};
export default Feed;
