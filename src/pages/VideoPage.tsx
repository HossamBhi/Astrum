import { useWindowDimensions } from "../hooks";

const VideoPage = () => {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  return (
    <div className="overflow-hidden">
      <video
        // poster={require("../assets/landscape.png")}
        playsInline
        autoPlay
        controls
        style={{ width, height: height - 100 }}
        className="absolute bottom-0 top-0 min-h-full w-auto
            min-w-full max-w-none bg-black"
      >
        <source
          src={
            isLandscape
              ? "https://astrumfilms.com/videos/AstrumLandscape.mp4"
              : "https://astrumfilms.com/videos/AstrumStory.mp4"
          }
          type="video/mp4"
        />
      </video>
    
    </div>
  );
};

export default VideoPage