import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/system";
import { ChannelCard, VideoCard } from "./";
import { fetchFromAPI } from "../utils/fetchFrom";

const ChannelDetail: React.FC = () => {
const [channelDetail, setChannelDetail] = useState(null);
const [videos, setVideos] = useState([])
const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
    setVideos(data?.items)
  );
  }, [id]);
  return <Box></Box>;
};

export default ChannelDetail;
