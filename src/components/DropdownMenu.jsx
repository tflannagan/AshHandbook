// src/components/DropdownMenu.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import "./DropdownMenu.css";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="dropdown">
      <button className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <span className="material-symbols-outlined">menu</span>
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <Link to="/" onClick={closeMenu}>
            <span className="material-symbols-outlined">cottage</span>Home
          </Link>
          <Link to="/llc-information" onClick={closeMenu}>
            <span className="material-symbols-outlined">quick_reference</span>
            LLC Information
          </Link>
          <Link to="/ash-legal" onClick={closeMenu}>
            <span className="material-symbols-outlined">quick_reference</span>
            Ash Legal
          </Link>
          <Link to="/about" onClick={closeMenu}>
            <span className="material-symbols-outlined">contact_support</span>
            About Page
          </Link>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
