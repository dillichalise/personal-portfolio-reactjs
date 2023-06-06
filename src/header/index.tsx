import React from "react";
const Header = () => {
  return (
    <header>
      <div className="profile-page sidebar-collapse">
        <nav className="navbar navbar-expand-lg fixed-top navbar-transparent bg-primary">
          <div className="container">
            <div className="navbar-translate">
              <a href="#" className="navbar-brand">
                Dilli
              </a>
              <button
                className="navbar-toggler navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navigation"
                aria-controls="navigation"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navigation"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link smooth-scroll" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link smooth-scroll" href="#experience">
                    Experience
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link smooth-scroll" href="#projects">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link smooth-scroll" href="#skill">
                    Skills
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link smooth-scroll" href="#education">
                    Education
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link smooth-scroll" href="#reference">
                    Reference
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link smooth-scroll" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
