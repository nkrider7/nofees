import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Search() {
  const { ...searchText } = useParams();
  console.log(searchText.v);
  const navigate = useNavigate();
  const [query, setQuery] = useState(searchText.v || "");
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  const API_KEY = "AIzaSyAHG-WsI5TXRaX4LIrMiIj94tmHVXwFcRw";

  const handleSearch = async () => {
    try {
      // Replace the API_KEY with your own YouTube API key
      const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=20&q=${query}&key=${API_KEY}`;

      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setVideos(data.items);
        setError(null);
      } else {
        setVideos([]);
        setError(data.error.message || "An error occurred");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setVideos([]);
      setError("An error occurred");
    }
  };
  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div>
      <div className="Search Box  justify-center m-2 flex gap-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-white  text-black w-fit pl-2 font-gil  pr-2 p-1 rounded-md"
          placeholder="Enter search query"
        />
        <button
          className="bg-white text-black pl-2 font-gil w-fit pr-2 p-1 rounded-sm hover:bg-black hover:text-white transition border-white border"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {videos.length > 0 && (
        <div className="bg-[#0f0f0f] pt-3 pb-3 ">
          <ul className="flex gap-2 flex-col">
            {videos.map((video) => (
              <div
                onClick={() => navigate(`/player/${video.id.videoId}`)}
                className="w-[80vw] h-fit bg-[#0f0f0fff] hover:bg-neutral-800 flex rounded-sm m-auto "
              >
                <img
                  className=" w-20 h-16 md:h-40 md:w-80 rounded-md "
                  src={video.snippet.thumbnails.medium.url}
                  alt=""
                />
                <li key={video.id.videoId}>
                  <div className="flex flex-col text-wrap gap-4 text-[1rem]">
                    <p className="text-white text-[10px] md:text-lg font-bold pl-5">
                      {video.snippet.title}
                    </p>
                    <p className="text-white text-[8px] hidden md:text-sm  md:block pl-5">
                      {video.snippet.description}
                    </p>
                  </div>
                </li>
              </div>
            ))}
          </ul>
        </div>
      )}

      {error && <p>{error}</p>}
    </div>
  );
}

export default Search;
