import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/system";
import { ChannelCard, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFrom";

const ChannelDetail: React.FC = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(134,44,242,1) 26%, rgba(93,93,228,1) 60%, rgba(0,212,255,1) 87%)",
              zIndex: 10,
              height: "300px"
          }}
        />
        <ChannelCard channerDetail={channelDetail || {}} marginTop="-92px"/>
      </Box>
      <Box display={"flex"} p="2">
        <Box sx={{mr: {sm: "100px"}}} />
          <Videos videos={videos}/>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
