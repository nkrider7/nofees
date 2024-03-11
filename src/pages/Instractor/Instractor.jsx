import { useState, useEffect } from "react";
import axios from "axios";

export default function Instractor() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&maxResults=50&channelId=UCf9T51_FmMlfhiGpoes0yFA&key=AIzaSyAHG-WsI5TXRaX4LIrMiIj94tmHVXwFcRw"
        );
        const data = response.data.items;
        setPlaylists(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching playlists:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-wrap ">
        {playlists.map((playlist) => (
          <div className="border  rounded-md scale-75 w-[18rem] bg-base-100 shadow-xl">
            <figure className="px-3 pt-3">
              <img
                src={playlist.snippet.thumbnails.medium.url}
                alt="Thubnail"
                className="rounded-[0.60rem]"
              />
            </figure>
            <div className="flex flex-col items-center text-center">
              <p className="text-white" key={playlist.id}>{playlist.snippet.title}</p>
              <div className="flex justify-center items-center">
                <button className="bg-red-500 py-2 px-5 text-white  font-cub rounded-md">Play</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
