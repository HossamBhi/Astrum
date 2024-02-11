import { FaInstagram, FaLinkedinIn, FaVimeoV } from "react-icons/fa";
import { useWindowDimensions } from "../hooks";

const Home = () => {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  return (
    <div className="overflow-hidden">
      <video
        poster={require("../assets/landscape.png")}
        playsInline
        controls={false}
        autoPlay
        loop
        muted
        style={{ width, height }}
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
      <div
        style={{
          backgroundColor: "#00000050",
          width,
          height,
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          justifyContent: "space-between",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          src={require("../assets/logo.png")}
          className="w-[40%] lg:w-[15%]"
          alt="Astrum Films Logo"
        />

        <h1 className="text-center text-4xl text-white sm:text-8xl">
          Coming Soon
        </h1>
        <div className="flex gap-3 pb-4">
          {/* <FaTiktok size={20} color="#fff" className="cursor-pointer" /> */}
          <a href="https://www.linkedin.com/company/astrumfilms/">
            <FaLinkedinIn size={20} color="#fff" className="cursor-pointer" />
          </a>
          <a href="https://vimeo.com/astrumfilms">
            <FaVimeoV size={20} color="#fff" className="cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/astrumfilms/">
            <FaInstagram size={20} color="#fff" className="cursor-pointer" />
          </a>

          {/* <FaYoutube size={20} color="#fff" className="cursor-pointer" /> */}
          {/* <FaFacebookF size={20} color="#fff" className="cursor-pointer" /> */}

          {/* <FaSnapchat size={20} color="#fff" className="cursor-pointer" /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
