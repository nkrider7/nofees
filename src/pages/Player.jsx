import React, { useEffect, useState } from "react";
import axios from "axios"; // Don't forget to import axios
import Video from "./Video";
import Sidebox from "./Sidebox";
import { useParams } from "react-router-dom";

export default function Player() {
  const { v } = useParams(); 
  const [videoData, setVideoData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'YOUR_API_KEY' with your actual YouTube Data API key
        const apiKey = "AIzaSyAHG-WsI5TXRaX4LIrMiIj94tmHVXwFcRw";
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${v}&key=${apiKey}`
        );

        // console.log(response.data);
        const data = response.data.items[0];
        setVideoData(data);

        // Fetch channel data using the channel ID from videoData
        const channelId = videoData.snippet.channelId;
        const channelResponse = await axios.get(
          `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${apiKey}`
        );

        const channelData = channelResponse.data.items[0];
        const channelIcon =
          channelResponse.data.items[0].snippet.thumbnails.default.url;
        setChannelIcon(channelIcon);
        setChannelData(channelData);
        // console.log(channelData);
      } catch (error) {
        console.error("Error fetching YouTube video data:", error);
      }
    };

    fetchData();
  }, [v]);

  return (
    <div className="h-screen bg-neutral-900 p-2 flex pb-10 w-full">
      <div className="flex w-full">
        <Video>
          {videoData && (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${v}`}
              title="video"
              allowFullScreen
              autoPlay
              className="rounded-md"
            />
          )}
      
         {videoData && (
            <>
              <div className="">
                <h1 className="text-xl text-white font-bold">
                  {videoData.snippet.title}
                </h1>
                <div className="disc h-24   text-white overflow-auto ">
                  <p className="text-xs">{videoData.snippet.description}</p>
                </div>
              </div>
            </>
          )} 
        </Video>
        <Sidebox></Sidebox>
      </div>
    </div>
  );
}
