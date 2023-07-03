import M from "materialize-css";
import { memo, useEffect, useRef } from "react";
import { Carousel } from "react-materialize";

export const LocalVideo = ({ playing }) => {
  const vidRef = useRef(null);
  useEffect(() => {
    if (playing !== 4) {
      vidRef.current.pause();
    }
  }, [playing]);

  return (
    <video
      ref={vidRef}
      src='images/projects/video/video.mp4'
      id='video'
      className='responsive-video'
      controls='controls'
      autoPlay
      poster='images/projects/video/video-poster.png'
    />
  );
};

const ProjectSlider = () => {
  useEffect(() => {
    // M.AutoInit();
  }, []);

  return (
    <Carousel
      options={{
        fullWidth: true,
        indicators: true,
      }}
      images={[
        "/images/projects/P_1_1.JPG",
        "/images/projects/P_1_2.JPG",
        "/images/projects/P_1_3.JPG",
      ]}
      className='carousel carousel-slider'
    />
  );
};
export default memo(ProjectSlider);
