import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

function Navbar() {
  const [first, setFirst] = useState(true);

  const onClick = () => {
    setFirst(!first);
  };

  const onClick1 = () => {
    setFirst(true);
  };

  return (
    <div
      className={`${styles.navbar} absolute z-10 w-[100vw] max-w-full h-40 top-[-11px]`}
    >
      <div className="w-[inherit] max-w-[inherit] h-[inherit]">
        <div className="w-full max-w-full h-[inherit] flex justify-center items-center">
          <NavLink className="w-[30%] sm:w-2/4" to="/">
            <div className="w-full sm:w-[100%]">
              <h1 className="text-xl sm:text-3xl font-bold text-center sm:hover:scale-125 sm:p-3 sm:duration-300">
                Sodiq Badmus
              </h1>
            </div>
          </NavLink>
          <div className="w-[70%]">
            <div className={styles.navmenu} onClick={onClick}>
              {first ? (
                <i className="fa-solid fa-bars fa-fade fa-xl fa-beat text-white items-end" />
              ) : (
                <i className="fa-sharp fa-solid fa-xmark fa-2xl fa-bounce text-white items-end" />
              )}
            </div>

            <div className={first ? `${styles.menu2}` : `${styles.menu1}`}>
              <NavLink
                className="sm:hover:scale-110 sm:hover:bg-slate-950 sm:p-3 sm:duration-300"
                to="services"
                onClick={onClick1}
              >
                Services
              </NavLink>
              <NavLink
                className="sm:hover:scale-110 sm:hover:bg-slate-950 sm:p-3 sm:duration-300"
                to="portfolios"
                onClick={onClick1}
              >
                Portfolio
              </NavLink>
              <NavLink
                className="sm:hover:scale-110 sm:hover:bg-slate-950 sm:p-3 sm:duration-300"
                to="aboutme"
                onClick={onClick1}
              >
                About me
              </NavLink>
              <NavLink
                className="bg-[#216D8F] rounded-[5px] p-2 sm:hover:scale-110 sm:hover:bg-slate-950 sm:p-3 sm:duration-300"
                onClick={onClick1}
                to="contact"
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
