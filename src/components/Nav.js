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
      <img
        className="nav-logo"
        src="https://www.24i.com/wp-content/themes/24i_media/images/24i%20Logo%20%E2%80%93%20White.svg"
        alt="24i logo"
      />
      <img
        className="nav-avatar"
        src="http://assets.pindej.cz/photo.jpg"
        alt="avatar"
      />
    </div>
  );
};

export default Nav;
