import React from "react";

const MobNavLinks = ({ closeNav }) => {
  return (
    <div className="Navcard-container">
      <ul className="Navcard-ul">
        <li>
          <a href="/" onClick={closeNav} className="links">
            HOME
          </a>
        </li>
        <li>
          <a href="#experience" onClick={closeNav} className="links">
            EXPERIENCES
          </a>
        </li>
        <li>
          <a href="#projects" onClick={closeNav} className="links">
            PROJECTS
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closeNav} className="links">
            CONTACT
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobNavLinks;
