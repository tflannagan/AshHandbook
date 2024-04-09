// src/components/AshLegalPage.jsx
import "./AshLegalPage.css";

const AshLegalPage = () => {
  return (
    <div className="page-container">
      <h2 className="legal-title">Ash Legal</h2>
      <p className="legal-info">
        Curabitur sit amet mauris morbi in dui quis est pulvinar ullamcorper.
        Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed
        aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis,
        venenatis tristique, dignissim in, ultrices sit amet, augue. Proin
        sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi
        lectus, commodo ac, facilisis ac, ultricies eu, pede.
      </p>
      <div className="metadata">
        <p>Date: YYYY-MM-DD</p>
        <p>Author: Another Author</p>
      </div>
    </div>
  );
};

export default AshLegalPage;
