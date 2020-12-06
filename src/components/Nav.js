import { useEffect, useState } from "react";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  //use effect for listening to mouse scroll, for the purposes of changing the navbar background color
  //this was originally implemented because I had a banner on the landing page with backdrop path (just like on Netflix), but I don't wanna burn time on that right now, so this is just basically ready for whenever I decide to implement it
  //this use of UseEffect simulates the behaviour of ComponentWillMount and ComponentDidUnmount from original class type components (I really do like the functional ones!)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShowNav(window.scrollY > 50);

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
          src="http://assets.pindej.cz/24ilogo.png"
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
