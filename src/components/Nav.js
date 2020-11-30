import { useEffect, useState } from "react";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShowNav(window.scrollY > 100);

      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);

  return (
    <div
      id="navbar"
      className={`nav ${showNav && "nav-background-scrolldown"}`}
    >
      <a
        className="nav-logo-container"
        href="https://www.24i.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="nav-logo"
          src="https://www.24i.com/wp-content/themes/24i_media/images/24i%20Logo%20%E2%80%93%20White.svg"
          alt="24i logo"
        />
      </a>
      <a
        className="nav-avatar-container"
        href="https://www.linkedin.com/in/filip-dorian-pindej-451b34bb/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="nav-avatar"
          src="http://assets.pindej.cz/photo.jpg"
          alt="avatar"
        />
      </a>
    </div>
  );
};

export default Nav;
