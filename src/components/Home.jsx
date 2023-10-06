import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import VideoCard from "./VideoCard";
import { Context } from "../context/contextApi";

const Home = () => {
  
  const { loading, searchResults } = useContext(Context);
  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <Sidebar />
      <div className="grow w-[calc(100%-190px)] h-full overflow-y-auto">
        <div className="grid ml-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {!loading &&
            searchResults.map((item) => {
              if (item.type !== "video") return false;
              return (
                <VideoCard key={item?.video?.videoId} video={item?.video} />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
