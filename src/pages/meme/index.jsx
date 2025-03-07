import React from 'react';
import Header from "../../components/header";
import backgroundImage from '../../assets/imgs/bannerai.png';
import coin from "../../assets/imgs/coin.png";
import girlai from "../../assets/imgs/aigirl.jpeg"
import videoFile1 from "../../assets/imgs/00045.mp4";
import videoFile2 from "../../assets/imgs/00056.mp4";

import ReactPlayer from "react-player";
import { useNavigate } from "react-router";

const SolmiYuAIHome = () => {
  let navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-[#111] p-8">
      {/* Hero Section */}
      <Header />
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="bg-gray-100 bg-opacity-50 p-8 rounded-lg text-center">
          <h1 className="text-5xl font-bold text-yellow-400">SolmiYuAI</h1>
          <p className="mt-4 text-xl text-gray-200">
            The excited coin for a better tomorrow!
          </p>
          <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 mt-8 px-5 py-3 rounded-full hover:bg-cyan-600">
            Join the Movement
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 md:px-16 bg-[#111] mt-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img
              src={girlai}
              alt="About SolmiYuAI"
              className="rounded-lg shadow-lg max-w-72"
            />
          </div>
          <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
            <h2 className="text-3xl font-bold text-yellow-400">About SolmiYuAI</h2>
            <p className="mt-4 text-gray-600 text-lg">
              SolmiYuAI is not just another cryptocurrency—it's a cultural
              phenomenon. Born from internet memes and powered by community
              passion, SolmiYuAI brings fun and financial innovation together.
              Join us as we ride the wave of viral trends and create a future
              that's both entertaining and rewarding.
            </p>
          </div>
        </div>
      </section>

      {/* Features Demo AI */}
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
            Supercharge your creativity with our AI-driven anime scene generator. Quickly design personalized and captivating scenes, finding inspiration in seconds and bringing your stories to life faster than ever before.
            </p>
            <button onClick={() => navigate('/image-generate')} class="bg-cyan-500 shadow-lg shadow-cyan-500/50 mt-8 px-5 py-3 rounded-full hover:bg-cyan-600">
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

      {/* Features Section */}
      <section className="py-16 bg-[#111]">
        <div className="container mx-auto px-4 md:px-16">
          <h2 className="text-4xl font-bold text-yellow-400 text-center mb-8">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              {/* <img
                src="https://via.placeholder.com/150?text=Community"
                alt="Community Driven"
                className="mb-4"
              /> */}
               <img src={coin} alt="Community Driven" className="mb-4 w-20" />
              <h3 className="text-xl font-semibold text-gray-700 text-center">
                Community Driven
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                SolmiYuAI is built by and for the community, ensuring every
                voice is heard.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              {/* <img
                src="https://via.placeholder.com/150?text=Innovation"
                alt="Innovative Use Cases"
                className="mb-4"
              /> */}
               <img src={coin} alt="Innovative Use Cases" className="mb-4 w-20" />
               <h3 className="text-xl font-semibold text-gray-700 text-center">
                Innovative Use Cases
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                From viral trends to creative partnerships, SolmiYuAI redefines
                fun in finance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              {/* <img
                src="https://via.placeholder.com/150?text=Viral+Marketing"
                alt="Viral Marketing"
                className="mb-4"
              /> */}
               <img src={coin} alt="Viral Marketing" className="mb-4 w-20" />
              <h3 className="text-xl font-semibold text-gray-700 text-center">
                Viral Marketing
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                Powered by memes and community engagement, SolmiYuAI spreads
                like wildfire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto text-center text-gray-300">
          © {new Date().getFullYear()} SolmiYuAI. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default SolmiYuAIHome;
