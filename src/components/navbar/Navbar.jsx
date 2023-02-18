import React, { useEffect, useState } from "react";
import "./Navbar.scss";

// import { Link } from "react-dom";
const Navbar = () => {
  const [active, setActive] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.addEventListener("scroll", isActive);
    };
  }, []);

  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          {/* <Link to="/"> */}
          <span className="text">fieverr</span>
          {/* </Link> */}
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fieverr Vuisness</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          <span>Become a Seller</span>
          <button>Join</button>
        </div>
      </div>
      <div>
        {active && (
          <>
            <hr />
            <div className="menu">
              <span>Test</span>
              <span>Test2</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
