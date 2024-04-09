// src/components/LLCInformationPage.jsx
import "./LLCInformationPage.css";

const LLCInformationPage = () => {
  return (
    <div className="page-container">
      <h2 className="legal-title">LLC Information</h2>
      <p className="legal-info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
        quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
        mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
        Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos.
      </p>
      <div className="metadata">
        <p>Date: YYYY-MM-DD</p>
        <p>Author: Author Name</p>
      </div>
    </div>
  );
};

export default LLCInformationPage;
