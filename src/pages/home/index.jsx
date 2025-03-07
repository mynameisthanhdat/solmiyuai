import React from "react";
import "./style.css";
import videoFile1 from "../../assets/imgs/00045.mp4";
import videoFile2 from "../../assets/imgs/00056.mp4";
import girl from "../../assets/imgs/match1.png";
import close from "../../assets/imgs/close.png";
import heart from "../../assets/imgs/heart-rate.png";
import ReactPlayer from "react-player";
import Header from "../../components/header";
import { useNavigate } from "react-router";

const Home = () => {
  let navigate = useNavigate();

  return (
    <div className="w-full p-10 xl:px-[150px] lg:px-[100px] md:px-[60px] sm:px-[30px]">
      <Header />
      <div className="mt-10">
        <div className="banner w-[100%] xl:px-[80px] lg:px-[60px] md:px-[40px] sm:px-[20px] py-[40px]">
          <div className="xl:w-[40%] lg:w-[50%] md:w-[60%] sm:w-[70%] pl-12">
            <p className="xl:text-[48px] lg:text-[36px] md:text-[24px] sm:text-[16px] font-bold">
              CREATE YOUR OWN <span className="text-yellow-400">AI ANIME</span>
            </p>
            <p className="text-cyan-500 xl:text-[26px] lg:text-[20px] md:text-[16px] sm:text-[12px] font-bold">
              Let your anime world come to life through captivating frames.
              Ignite your creativity with a tool that unlocks every limit of
              imagination.
            </p>
            <p className="text-cyan-500 xl:text-[26px] lg:text-[20px] md:text-[16px] sm:text-[12px] font-bold mt-4">
              CA:
            </p>
          </div>
        </div>
        <div className="generate p-8 w-[450px] m-auto my-16">
          <p className="xl:text-[48px] lg:text-[36px] md:text-[24px] sm:text-[16px] font-bold text-yellow-400">
            AI IMAGE
          </p>
          <p className="xl:text-[48px] lg:text-[36px] md:text-[24px] sm:text-[16px] font-bold text-yellow-400">
            GENERATOR
          </p>
          <p className="text-[16px] font-bold mt-3">
            Create your own AI-generated anime artwork. Choose your character –
            whether it's a hero, heroine, or mythical being. Customize with
            unique filters, explore body types, skin tones, hairstyles, outfits,
            and immersive backgrounds to match your vision. Effortlessly
            transform your imagination into breathtaking anime visuals.
          </p>
          <button onClick={() => navigate('/image-generate')} class="bg-cyan-500 shadow-lg shadow-cyan-500/50 mt-8 px-5 py-3 rounded-full hover:bg-cyan-600">
            <p className="text-[24px] font-bold">TRY NOW</p>
          </button>
        </div>
        <div className="my-16 grid lg:grid-cols-3 md:grid-cols-1 gap-4">
          <div className="mt-16 md:m-auto">
            <ReactPlayer
              url={videoFile1}
              width={400}
              playing={true}
              loop
              muted
            />
          </div>
          <div className="text-center px-16">
            <p className="xl:text-[48px] lg:text-[36px] md:text-[24px] sm:text-[16px] font-bold text-yellow-400">
              AI VIDEO - GIF GENERATOR
            </p>
            <p className="text-[16px] font-bold mt-3">
              Our innovative AI-powered tool revolutionizes creativity, enabling
              you to effortlessly design personalized anime scenes that bring
              your imagination to life.
            </p>
            <button class="bg-cyan-500 shadow-lg shadow-cyan-500/50 mt-8 px-5 py-3 rounded-full hover:bg-cyan-600">
              <p className="text-[24px] font-bold">TRY NOW</p>
            </button>
          </div>
          <div className="mt-16 md:m-auto">
            <ReactPlayer
              url={videoFile2}
              width={400}
              playing={true}
              loop
              muted
            />
          </div>
        </div>
        <p className="xl:text-[48px] lg:text-[36px] md:text-[24px] sm:text-[16px] font-bold text-yellow-400 text-center">
          Telegram Anime Community App
        </p>
        <p className="text-[16px] font-bold mt-3 mb-12 text-center">
          Match with your love
        </p>
        <div className="relative flex justify-center z-[10]">
          <div className="relative 1 max-w-[300px] border-[2px] border-[#ffa600] z-[10] bg-black">
            <img src={girl} alt="" srcset="" />
            <p className="text-red-500 font-bold text-[20px] pt-2 px-2">
              Kathy Latina
            </p>
            <p className="px-2">
              Love animal, ai girl , shopping ... come with me. ❤❤❤
            </p>
            <p className="px-2">Hashtag: #girl , #anime</p>
            <div className="flex justify-around my-3">
              <div className="border-[2px] border-[#ffa600] px-[9px] pt-3 pb-2 rounded-full bg-white">
                <div className="w-10 h-10">
                  <img
                    src={close}
                    alt=""
                    srcset=""
                    className="w-7 h-8 ml-[6px] pt-[6px]"
                  />
                </div>
              </div>
              <div className="border-[2px] border-[#ffa600] px-[9px] pt-3 pb-2 rounded-full bg-black">
                <img src={heart} alt="" srcset="" className="w-10 h-10" />
              </div>
            </div>
          </div>
          <div className="absolute 1 rotate-[6deg] max-w-[300px] border-[2px] border-[#ffa600] z-[0] bg-black">
            <img src={girl} alt="" srcset="" />
            <p className="text-red-500 font-bold text-[20px] pt-2 px-2">
              Kathy Latina
            </p>
            <p className="px-2">
              Love animal, ai girl , shopping ... come with me. ❤❤❤
            </p>
            <p className="px-2">Hashtag: #girl , #anime</p>
            <div className="flex justify-around my-3">
              <div className="border-[2px] border-[#ffa600] px-[9px] pt-3 pb-2 rounded-full bg-white">
                <div className="w-10 h-10">
                  <img
                    src={close}
                    alt=""
                    srcset=""
                    className="w-7 h-8 ml-[6px] pt-[6px]"
                  />
                </div>
              </div>
              <div className="border-[2px] border-[#ffa600] px-[9px] pt-3 pb-2 rounded-full bg-black">
                <img src={heart} alt="" srcset="" className="w-10 h-10" />
              </div>
            </div>
          </div>
          <div className="absolute 1 rotate-[-6deg] max-w-[300px] border-[2px] border-[#ffa600] z-[0] bg-black">
            <img src={girl} alt="" srcset="" />
            <p className="text-red-500 font-bold text-[20px] pt-2 px-2">
              Kathy Latina
            </p>
            <p className="px-2">
              Love animal, ai girl , shopping ... come with me. ❤❤❤
            </p>
            <p className="px-2">Hashtag: #girl , #anime</p>
            <div className="flex justify-around my-3">
              <div className="border-[2px] border-[#ffa600] px-[9px] pt-3 pb-2 rounded-full bg-white">
                <div className="w-10 h-10">
                  <img
                    src={close}
                    alt=""
                    srcset=""
                    className="w-7 h-8 ml-[6px] pt-[6px]"
                  />
                </div>
              </div>
              <div className="border-[2px] border-[#ffa600] px-[9px] pt-3 pb-2 rounded-full bg-black">
                <img src={heart} alt="" srcset="" className="w-10 h-10" />
              </div>
            </div>
          </div>
        </div>
        <div className="my-12 m-auto text-center">
          <button class="bg-cyan-500 shadow-lg shadow-cyan-500/50 mt-8 px-5 py-3 rounded-full hover:bg-cyan-600">
            <p className="text-[24px] font-bold">COMING SOON</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
