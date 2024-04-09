// src/components/VideoPage.jsx
import { useParams } from "react-router-dom";
import videos from "../videosData";
import "./VideoPage.css";

const VideoPage = () => {
  const { videoId } = useParams();
  const video = videos.find((video) => video.id === videoId);

  return (
    <div className="video-container">
      {video ? (
        <>
          <h2 className="video-title">{video.title}</h2>
          <iframe
            src={`https://www.youtube.com/embed/${video.id}`}
            title="YouTube video player"
            allowFullScreen
            id="video"
            className="video-iframe" // Added a class for potential styling
          ></iframe>
          <div className="instructions-container">
            <h3>Instructions</h3>
            <ol>
              {video.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </>
      ) : (
        <p>Video not found.</p>
      )}
    </div>
  );
};

export default VideoPage;
