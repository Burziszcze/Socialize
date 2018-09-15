import React from "react";

export default () => {
  return (
    <footer className="footer">
      <div className="container">
        <span className="text-white">
          Copyright &copy; {new Date().getFullYear()} Socialize{" "}
          <i id="heart-ico" aria-hidden="true" className="fa fa-heart" /> by{" "}
          <a
            id="author-footer"
            href="https://burziszcze.github.io/new-portfolio"
            rel="noopener noreferrer"
          >
            Paweł Jarosz
      </a>
        </span>
      </div>
    </footer >
  );
};
