import { Stack, Box } from "@mui/material";
import { ChannelCard, VideoCard } from "./";

function Videos({ videos = [], direction="" }) {
  if (!videos) return "loading..."
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((vid: { id: any, snippet: any }, index: number) => (
        <Box key={index}>
          {vid?.id.videoId && <VideoCard video={vid} />}
          {vid?.id.channelId && <ChannelCard channerDetail={vid} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
