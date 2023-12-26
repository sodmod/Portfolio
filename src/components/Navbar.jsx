import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const onClick = () => {
    setClick((preState) => !preState);
  };

  return (
    <div className={`${"nav-container"}`}>
      <h1>Badmus Sodiq Olusola</h1>
      <div onClick={onClick} id="bars">
        <i className={click ? "fa-solid fa-bars" : "fa-solid fa-xmark"} />
      </div>
      <ul className={!click ? `${"nav-show"}` : `${"nav-hidden"}`}>
        <NavLink>about</NavLink>
        <NavLink>service</NavLink>
        <NavLink>Work</NavLink>
        <NavLink>Blog</NavLink>
        <NavLink>Contact me</NavLink>
      </ul>
    </div>
  );
}

export default Navbar;
