import React from "react";
import { FaLongArrowAltUp } from "react-icons/fa";
import { IoIosArrowRoundUp } from "react-icons/io";
import whitePeach from "../assets/whitePeach.png";
// import whitePeach from "../assets/handeWhitePeach.png";
import greenMint from "../assets/grenMint.png";
import Blackberry from "../assets/blackCoke.png";
import blueRaspberry from "../assets//BlueRaspberry.png";
import cherryBlueBerry from "../assets//CherryBlueberry.png";

function Flavours() {
  const questions = [
    {
      question:
        "If Fizzo Had a Secret Flavor, What Would You Guess It Tastes Like?",
      button: "Make Your Guess",
    },
    {
      question: "What's the Craziest Snack You'd Pair with a Fizzo?",
      button: "Share Your Snack",
    },
    {
      question: "If You Could Create a New Fizzo Flavor, What Would It Be?",
      button: " Invent Your Flavor",
    },
  ];

  const flavourCard01 = [
    { imgSrc: greenMint, title: "Minty Fresh Splash" },
    { imgSrc: Blackberry, title: "Midnight Blackberry" },
  ];
  const flavourCard02 = [
    { imgSrc: blueRaspberry, title: "Frosty Blue Raspberry" },
    { imgSrc: cherryBlueBerry, title: "Mystic Berry Fusion" },
  ];

  return (
    <div className="w-full border-[1px] border-transparent">
      <div className="questionCards w-full flex h-[30vh] justify-between px-20 -mt-20 gap-6">
        {questions.map((i, index) => {
          return (
            <div className="bg-white shadow-lg border border-[#E0F7FA] w-full rounded-3xl px-6 py-4 flex flex-col items-start">
              <button className="bg-[#C6FF00] text-[#333333] font-semibold px-4 py-2 rounded-md mb-4">
                {i.button}
              </button>
              <div className="w-full flex mt-6">
                <p className="text-[#333333] mr-8 text-lg mb-4">{i.question}</p>
                <button className="flex items-center justify-cente">
                  <div className="bg-[#00BFAE] w-10 h-10 text-white flex items-center justify-center rounded-full">
                    <FaLongArrowAltUp className="rotate-45" />
                  </div>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="main-content h-full mt-16 flex justify-between pr-10">
        <div className="hero-flavour h-full w-[55vw] mr-8 relative">
          <h1 className="text-[16vh] leading-none font-bold mb-8 ml-5">
            Ultimate Fizzo <br /> Fantasy
          </h1>
          <div className="image bg-[#F6A226] h-[80vh] ml-[5vw] relative rounded-3xl">
            <div className="top-4 left-10 w-16 h-16 rotate-90 border-2 rounded-full relative flex items-center justify-center">
              <IoIosArrowRoundUp className="text-white text-4xl"/>
            </div><a href="#">
            <div className="h-[90vh] absolute bottom-0">
              <img src={whitePeach} alt="GoToFlavour" className="h-full w-full object-cover" />
            </div></a>
            <div className="absolute w-full bottom-0 bg-[#f6a32677] backdrop-blur-sm rounded-bl-3xl  rounded-br-3xl overflow-hidden">
              <div className="py-4 px-16 flex items-center justify-center">
                <h2 className="peachText text-[8vh] font-bold text-white leading-none capitalize">
                  Pearl White Peach
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[50vw]">
          <div className="flex h-full flex-col w-[20vw] justify-between overflow-hidden">
            {flavourCard02.map((i, index) => {
              return (
                <div
                  className={
                    index == 1
                      ? "h-1/2 mt-8 bg-[#073B58] rounded-3xl relative"
                      : "h-1/2 mt-8 bg-[#FF6F61] rounded-3xl relative"
                  }
                >
                  <img
                    src={i.imgSrc}
                    alt="FlavourImg"
                    className="h-[60vh] w-[20vw] pt-10 absolute bottom-0"
                  />
                  <div className="p-4 bg-[#70707033] w-full flex justify-center absolute bottom-0 rounded-bl-3xl rounded-br-3xl">
                    <h2 className="peachText text-[3vh] font-bold text-white leading-none capitalize">
                      {i.title}
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex h-full flex-col w-[20vw] mt-10 ml-10 overflow-hidden">
            {flavourCard01.map((i, index) => {
              return (
                <div
                  className={
                    index == 1
                      ? " h-[51vh] bg-[#1d90c5] rounded-3xl mt-8 relative "
                      : "h-1/2 mt-8  bg-[#009689] rounded-3xl relative "
                  }
                >
                  <img
                    src={i.imgSrc}
                    alt="FlavourImg"
                    className={
                      index == 1
                        ? "h-[45vh] w-[20vw] pt-10 absolute bottom-12"
                        : "h-[48vh] w-[20vw] pt-10 absolute bottom-24"
                    }
                  />
                  <div className="p-4 bg-[#70707033]  w-full flex justify-center absolute bottom-0 rounded-bl-3xl rounded-br-3xl">
                    <h2 className="peachText text-[3vh] font-bold text-white leading-none capitalize">
                      {i.title}
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-[20vh]">
        <button className="w-[20vw] mt-4 h-[10vh] bg-[#C6FF00] flex  items-center px-5 rounded-lg text-[1.5rem] text-[#181b20] font-semibold">
          Taste the Magic
          <FaLongArrowAltUp className="rotate-90 h-16 font-light ml-7 mt-2" />
        </button>
      </div>
    </div>
  );
}

export default Flavours;
