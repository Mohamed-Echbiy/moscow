import M from "materialize-css";
import { memo, useEffect, useRef } from "react";
import { Carousel } from "react-materialize";

export const LocalVideo = ({ playing, src }) => {
  const vidRef = useRef(null);
  // useEffect(() => {
  //   if (playing !== 4) {
  //     vidRef.current.pause();
  //   }
  // }, [playing]);

  return (
    <iframe
      ref={vidRef}
      src={src}
      id='video'
      className='responsive-video'
      style={{ aspectRatio: "16/9", width: "100%" }}
      autoPlay
    />
  );
};

const ProjectSlider = ({ images }) => {
  useEffect(() => {
    // M.AutoInit();
  }, []);

  return (
    <Carousel
      options={{
        fullWidth: true,
        indicators: true,
      }}
      images={[...images]}
      className='carousel carousel-slider'
    />
  );
};
export default memo(ProjectSlider);
{
  /* <iframe
  width='1280'
  height='720'
  src='https://www.youtube.com/embed/wSGBW1UBBKM'
  title='Fanera won first place in PitchForce weekly event for A round startups'
  frameborder='0'
  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
  allowfullscreen
></iframe>; */
}
