import React, { useRef, useState } from 'react';

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="w-full">
      <video className="w-full" ref={videoRef} controls>
        <source src="https://dl6.webmfiles.org/big-buck-bunny_trailer.webm" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <button onClick={handlePlay}>
        {isPlaying ? 'Pause' : 'Play'}
      </button> */}
    </div>
  );
};

export default VideoPlayer;