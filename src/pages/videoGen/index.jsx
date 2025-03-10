import React, { useState } from "react";
import Header from "../../components/header";
import "./style.css";
import { useNavigate } from "react-router";
import { BeatLoader } from "react-spinners";
import axios from "axios";
import ReactPlayer from "react-player";

const VideoGenerate = () => {
  let navigate = useNavigate();
  const [prompt, setPrompt] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    try {
      setLoading(true);
      const response = await axios.post("https://solmiyu.com/gen-gif", {
        prompts: prompt,
      });
      setVideoUrl(response.data.data); // The URL of the generated image

      console.log("response: ", response);
      setLoading(false);
    } catch (error) {
      console.error("Error generating image:", error);
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-[#111] min-h-full">
      <div className="w-full p-10 xl:px-[150px] lg:px-[100px] md:px-[60px] sm:px-[30px]">
        <Header />
        <div className="text-center">
          <p className="xl:text-[48px] text-[32px] font-bold text-center mt-8 mb-4">
            CREATE YOUR OWN <span className="text-yellow-400">AI ANIME</span>
          </p>
          <textarea
            id="w3review"
            name="w3review"
            rows="2"
            className="bg-black px-5 py-3 rounded-2xl border-[2px] border-[#ffa600] text-[18px] min-w-[420px] font-thin"
            placeholder="Enter your prompt to create a Gif AI Anime"
            onChange={(e) => setPrompt(e.target.value)}
          >
            {prompt}
          </textarea>
        </div>
        <div className="m-auto text-center">
          {prompt && (
            <button
              onClick={() => {
                !loading && handleGenerate();
              }}
              class="bg-cyan-500 shadow-lg shadow-cyan-500/50 mt-4 px-5 py-3 rounded-full hover:bg-cyan-600"
            >
              <p className="text-[18px] font-bold">
                {loading ? <BeatLoader color="#fff" /> : "GENERATE"}
              </p>
            </button>
          )}
        </div>
        {videoUrl && (
          <div className="text-center my-4">
            <div className="flex justify-center ">
              <div className="min-w-[250px] md:min-w-[300px] lg:min-w-[400px] max-w-[500px] h-auto rounded-[20px]">
                <ReactPlayer
                  url={videoUrl}
                  controls={true} // Display video controls
                  width={400}
                  playing={true}
                  loop
                  muted
                />
              </div>
            </div>
          </div>
        )}
        <div className="flex justify-center">
          <div className="mx-auto flex items-center gap-3 md:gap-8 mt-4">
            <div
              className="cursor-pointer bg-black shadow-lg px-4 py-2 rounded font-bold text-yellow-500"
              style={{ whiteSpace: "nowrap" }}
              onClick={() => navigate("/image-generate")}
            >
              IMAGE GENERATOR
            </div>
            <div
              className="cursor-pointer bg-black shadow-lg px-4 py-2 rounded font-bold text-slate-500"
              style={{ whiteSpace: "nowrap" }}
            >
              GIF GENERATOR
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGenerate;
