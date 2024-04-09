import { useState } from "react";
import { Link } from "react-router-dom";
import videos from "../videosData";
import "./HomePage.css";

const ITEMS_PER_PAGE = 5;

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredVideos = videos.filter(
    (video) =>
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate the total number of pages
  const totalPage = Math.ceil(filteredVideos.length / ITEMS_PER_PAGE);
  // Calculate the items to be displayed on the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = filteredVideos.slice(startIndex, endIndex);

  return (
    <div className="container">
      <header>
        <h1>Ash Springs Handbook</h1>
      </header>
      <input
        type="text"
        id="videoSearch"
        name="videoSearch"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          setCurrentPage(1); // Reset to the first page on search
        }}
      />
      <div className="video-list-container">
        {currentItems.length > 0 ? (
          <div className="video-list">
            {currentItems.map((video) => (
              <div key={video.id} className="video-item">
                <Link to={`/video/${video.id}`}>
                  <h3 className="item-title">{video.title}</h3>
                  <p className="subtitle">{video.subtitle}</p>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>No results found.</p>
          </div>
        )}
        {totalPage > 1 && (
          <div className="pagination">
            {[...Array(totalPage).keys()].map((number) => (
              <button
                key={number}
                onClick={() => setCurrentPage(number + 1)}
                className={`page-item ${
                  currentPage === number + 1 ? "active" : ""
                }`}
              >
                {number + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
