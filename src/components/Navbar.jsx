import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

function Navbar() {
  const [first, setFirst] = useState(true);
  const onClick = () => {
    setFirst(!first);
  };

  return (
    <div
      className={`${styles.navbar} absolute z-10 w-[100vw] max-w-full h-40 top-[-11px]`}
    >
      <div className="w-[inherit] max-w-[inherit] h-[inherit]">
        <div className="w-full max-w-full h-[inherit] flex justify-center items-center">
          <NavLink className="w-[30%] sm:w-2/4" to="/">
            <h1 className=" w-full sm:w-[100%] text-xl sm:text-3xl font-bold text-center">
              Sodiq Badmus
            </h1>
          </NavLink>
          <div className="w-[70%]">
            <div className={styles.navmenu} onClick={onClick}>
              {first ? (
                <>
                  <i className="fa-solid fa-bars fa-fade fa-xl fa-beat text-white items-end"></i>
                </>
              ) : (
                <i className="fa-sharp fa-solid fa-xmark fa-2xl fa-bounce text-white items-end"></i>
                // <i class="fa-sharp fa-solid fa-xmark fa-bounce fa-xl"></i>
              )}
            </div>

            <div className={first ? `${styles.menu2}` : `${styles.menu1}`}>
              <NavLink className="" to="services">
                Services
              </NavLink>
              <NavLink className="" to="portfolios">
                Portfolio
              </NavLink>
              <NavLink className="" to="aboutme">
                About me
              </NavLink>
              <NavLink className="bg-[#216D8F] rounded-[5px] p-2" to="contact">
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
