import React from "react";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container text-center social-icons">
        <a
          className="cc-linkedin "
          href="https://www.linkedin.com/in/dilli-chalise-573458134/"
          target="_blank"
        >
          <i className="fa fa-linkedin fa-2x" aria-hidden="true" />
        </a>
        <a
          className="cc-instagram "
          href="https://www.instagram.com/dillichalise/"
          target="_blank"
        >
          <i className="fa fa-instagram fa-2x" aria-hidden="true" />
        </a>
        <a
          className="cc-twitter "
          href="https://twitter.com/dillichalise"
          target="_blank"
        >
          <i className="fa fa-twitter fa-2x" aria-hidden="true" />
        </a>

        <a
          className="cc-github "
          href="https://github.com/dillichalise"
          target="_blank"
        >
          <i className="fa fa-github fa-2x" aria-hidden="true" />
        </a>
        <a className="cc-google-plus " href="#" target="_blank">
          <i className="fa fa-google-plus fa-2x" aria-hidden="true" />
        </a>
      </div>
      <div className="text-center text-muted mt-1">
        <p>&copy; All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
