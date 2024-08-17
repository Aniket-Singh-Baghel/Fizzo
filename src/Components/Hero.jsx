import { motion as m, useAnimation, useViewportScroll } from "framer-motion";
import heroImg from "../assets/heroImage.png";
import { FaLongArrowAltUp } from "react-icons/fa";
import { useEffect } from "react";
function Hero() {
  return (
    <m.div>
      <div className="w-full h-screen flex overflow-hidden">
        <div className="tagline text-6xl capitalize font-bold mt-20 ml-16">
          Fizzo: <br /> Where Flavor Meets Fun
        </div>
        <div className="flex-shrink-0 overflow-hidden -ml-28">
          <img src={heroImg} alt="HeroImg" className="h-full object-cover"/>
        </div>
        <div className="mt-96 mr-10">
          <p className="w-[22vw] font-semibold leading-[3vh] text-lg">
            Dive into a world of vibrant flavors and effervescent fun. Refresh
            your day with Fizzo&apos;s unique sparkle!
          </p>
          <button className="w-32 mt-4 h-14 bg-[#C6FF00] rounded-lg text-[#333333] font-semibold flex  justify-center items-center gap-2">
            Explore
            <div className="bg-black w-10 h-10 text-white flex items-center justify-center rounded-full">
              <FaLongArrowAltUp className="rotate-45" />
            </div>
          </button>
        </div>
      </div>
    </m.div>
  );
}

export default Hero;
