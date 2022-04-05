import React from "react";
import { Link } from "react-router-dom";

Menu.propTypes = {};

function Menu() {
  return (
    <div className="sticky-top bg-white">
      <div className="candidate-info onepage">
        <ul>
          <li>
            <Link to="#" className="scroll-bar nav-link">
              <span>Resume Headline</span>
            </Link>
          </li>
          <li>
            <Link to="#" className="scroll-bar nav-link">
              <span>Employment</span>
            </Link>
          </li>
          <li>
            <Link to="#" className="scroll-bar nav-link">
              <span>Education</span>
            </Link>
          </li>
          <li>
            <Link to="#" className="scroll-bar nav-link">
              <span>IT Skills</span>
            </Link>
          </li>
          <li>
            <Link to="#" className="scroll-bar nav-link">
              <span>Projects</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
