import React, { useState, useEffect } from 'react';
import { getMostPopularVideos } from '../api/request';
import VideoCard from '../components/VideoCard';
import { datas } from '../../public/datas';

const Home = () => {
  const [videos, setVideos] = useState();
  useEffect(() => {
    // getMostPopularVideos().then(data =>{setVideos(data)})
    setVideos(datas);
  }, []);

  return (
    <ul className='w-full mt-16 p-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-10'>
      {videos && videos.map((video) => <VideoCard key={video.id.videoId} video={video} />)}
    </ul>
  );
};

export default Home;
