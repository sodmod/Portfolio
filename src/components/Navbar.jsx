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
    <div className={`${styles.navbar} max-w-full`}>
      <div className="h-[inherit]">
        <div className="max-w-full h-[inherit] grid grid-cols-2 items-center">
          <NavLink className="" to="/">
            <h1 className="text-xl sm:text-3xl font-bold sm:hover:scale-x-110 sm:p-3 sm:duration-300">
              Sodiq Badmus
            </h1>
          </NavLink>
          <div className="">
            <div className={styles.navmenu} onClick={onClick}>
              {first ? (
                <i className="fa-solid fa-bars fa-fade fa-xl fa-beat items-end" />
              ) : (
                <i className="fa-sharp fa-solid fa-xmark fa-2xl fa-bounce] items-end" />
              )}
            </div>

            <div className={first ? `${styles.menu2}` : `${styles.menu1}`}>
              <NavLink
                className="sm:hover:scale-110 sm:hover:bg-slate-950 sm:p-3 sm:duration-300"
                to="portfolios"
                onClick={onClick1}
              >
                Portfolio
              </NavLink>
              <NavLink
                className="sm:hover:scale-110 sm:hover:bg-slate-950 sm:duration-300"
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
