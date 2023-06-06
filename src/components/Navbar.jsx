import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [first, setFirst] = useState(false);

  const onClick = () => {
    setFirst(!first);
  };

  return (
    <div
      className={`${styles.navbar} " absolute z-10 w-[100vw] max-w-full h-40 top-[-11px] " `}
    >
      <div className="w-[inherit] max-w-[inherit] h-[inherit]">
        <div className="w-full max-w-full h-[inherit] flex justify-center items-center">
          <NavLink className="w-[35%] sm:w-2/4">
            <h1 className=" w-full sm:w-[100%] text-xl sm:text-3xl font-bold text-center">
              Sodiq Badmus
            </h1>
          </NavLink>
          <div className="w-[50%]">
            <div className={styles.navmenu} onClick={onClick}>
              {first ? (
                <AiOutlineMenu size={30} className="text-end w-full" />
              ) : (
                <AiOutlineClose size={30} className="text-end w-full" />
              )}
            </div>

            <div className={!first ? `${styles.menu1}` : `${styles.menu2}`}>
              <NavLink className="" to="services">
                Services
              </NavLink>
              <NavLink className="" to="portfolios">
                Portfolio
              </NavLink>
              <NavLink className="" to="aboutme">
                About me
              </NavLink>
              <NavLink className="bg-[#216D8F] rounded-[5px]">Contact</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
