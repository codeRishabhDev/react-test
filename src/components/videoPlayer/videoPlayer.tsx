import React, { useRef, useState, useEffect } from 'react';

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      const handlePlay = () => {
        setIsPlaying(true);
        console.log('Video is playing');
      };

      const handlePause = () => {
        setIsPlaying(false);
        console.log('Video is paused');
      };

      videoElement.addEventListener('play', handlePlay);
      videoElement.addEventListener('pause', handlePause);

      return () => {
        videoElement.removeEventListener('play', handlePlay);
        videoElement.removeEventListener('pause', handlePause);
      };
    }
  }, []);

  return (
    <div className="w-full">
      <video className="w-full" ref={videoRef} controls poster="images/watch-video.png">
        <source src="https://dl6.webmfiles.org/big-buck-bunny_trailer.webm" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {isPlaying ? null : (
        <button onClick={() => videoRef.current?.play()}>
          <img
            src="images/play.png"
            className="absolute left-0 right-0 mx-auto lg:top-[40%] top-[-10%]"
            alt="play"
          />
        </button>
      )}
    </div>
  );
};

export default VideoPlayer;