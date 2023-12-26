import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function RootLayout() {
  return (
    <>
      <AnimatePresence initial={true} mode="wait">
        <div className="w-full min-h-full bg-black">
          <Outlet />
        </div>
      </AnimatePresence>
    </>
  );
}

export default RootLayout;
