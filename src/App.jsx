import { HashRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import VideoPage from "./components/VideoPage";
import DropdownMenu from "./components/DropdownMenu";
import LLCInformationPage from "./components/LLCInformationPage";
import AshLegalPage from "./components/AshLegalPage";
import AboutPage from "./components/AboutPage";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-header">
        <DropdownMenu />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/video/:videoId" element={<VideoPage />} />
        <Route path="/llc-information" element={<LLCInformationPage />} />
        <Route path="/ash-legal" element={<AshLegalPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
