import React from "react";

export default () => {
  return (
    <footer className="footer text-white mt-5 p-5 text-center">
      <div className="container">
        Copyright &copy; {new Date().getFullYear()} Socialize, made with{" "}
        <i id="heart-ico" aria-hidden="true" className="fa fa-heart" /> by{" "}
        <a
          id="author-footer"
          href="https://burziszcze.github.io/new-portfolio"
          rel="noopener noreferrer"
        >
          Paweł Jarosz
      </a>
      </div>
    </footer>
  );
};
