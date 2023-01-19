import React from 'react';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import Header from '../components/Header';
import Nav from '../components/Nav';
import RelatedVideos from '../components/RelatedVideos';

const MovieDetail = () => {
  const { id } = useParams();

  return (
    <div className='w-full h-fit mt-5 flex flex-nowrap justify-around bg-black'>
      <div>
        <YouTube
          videoId={id}
          opts={{
            width: '900',
            height: '500',
            playerVars: {
              autoplay: 0,
            },
          }}
        />
      </div>
      <RelatedVideos />
    </div>
  );
};

export default MovieDetail;
