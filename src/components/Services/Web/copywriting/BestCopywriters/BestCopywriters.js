import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import './BestCopywriters.scss';

function BestCopywriters() {
  const videoRef = useRef(null); // Reference to control the video element
  const [isPlaying, setIsPlaying] = useState(false); // State to track video playback

  useEffect(() => {
    AOS.init();
  }, []);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true); // Update the state to hide play button and poster
    }
  };

  return (
    <React.Fragment>
      <div className="bestCopywriters">
        <div className="container">
          <div className="title">
            <div className="row">
              <div className="col-md-6" data-aos="fade-right" data-aos-duration="1000">
                <h2>Wish to hire the
                  best copywriters in
                  <span> your town?</span></h2>
                <p>Vision, Skill and Process to craft the ideal copy for YOU.</p>
              </div>
              <div className="col-md-6" data-aos="fade-left" data-aos-duration="1000">
                <p>Quick Growth Consulting has offered copywriting services to clients in Toronto, Canada and others all over the globe. Our ability to understand your target markets and buyer persona makes us write content that actually converts. We write using the most recognized content writing and copywriting frameworks to give a reading experience that demonstrates expertise and authenticity.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="videoWrapper">
        <div className="container videoContainer">
          <div className="col-md-12">
          <video
            ref={videoRef}
            loop
            muted
            className={isPlaying ? 'video playing' : 'video'} // Add class based on isPlaying
            poster='/images/services/copywriteVideo.svg'
          >
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!isPlaying && (
            <div className="custom-play-button" onClick={handlePlayVideo}>
              <img src="/images/services/play.svg" alt="Play Button" className="play-icon" />
            </div>
          )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BestCopywriters;
