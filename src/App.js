import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./pages/home";
import ImgaeGenerate from "./pages/imageGen";
import VideoGenerate from "./pages/videoGen";
import SolmiYuAIHome from "./pages/meme";
import NotFoundPage from "./pages/notFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SolmiYuAIHome />} />
        <Route path="/image-generate" element={<ImgaeGenerate />} />
        <Route path="/gif-generate" element={<VideoGenerate />} />
        {/* <Route path="/meme" element={<Home />} /> */}
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
