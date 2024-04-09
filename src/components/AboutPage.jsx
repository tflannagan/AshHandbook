// src/components/AboutPage.jsx
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="page-container">
      <h2>About Us</h2>
      <p>
        This handbook serves as a database and functional guide for all the
        ins-and-outs of the Ash Springs ranch. <br></br>With Love, Ty
      </p>
      <div className="metadata">
        <p>For Edits/Additions: tylerflannagan@yahoo.com</p>
        <p className="metadata-info">
          <a href="https://www.tyflannagan.tech/">
            <span className="material-symbols-outlined">web</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
