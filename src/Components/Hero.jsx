import heroImg from "../assets/heroImage.png";
import { FaLongArrowAltUp } from "react-icons/fa";
function Hero() {
  return (
    <div>
      <div className="w-full h-screen bg-[#F5F5F5] flex">
        <div className="tagline text-6xl capitalize font-bold mt-20 ml-24">
          Fizzo: <br /> Where Flavor Meets Fun
        </div>
        <img src={heroImg} alt="HeroImg" className="h-full -ml-[15vw]" />
        <div>
          <p className="mt-80 w-[22vw] font-semibold leading-[3vh] text-lg">
            Dive into a world of vibrant flavors and effervescent fun. Refresh
            your day with Fizzo&apos;s unique sparkle!
          </p>
          <button className="w-32 mt-4 h-14 border-2 bg-[#C6FF00] rounded-lg text-[#333333] font-semibold flex  justify-center items-center gap-2">
            Explore
            <div className="bg-black w-10 h-10 text-white flex items-center justify-center rounded-full">
              <FaLongArrowAltUp className="rotate-45" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
