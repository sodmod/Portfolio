import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function RootLayout() {
  return (
    <div className="mt-7 mx-24">
      <Navbar />
      <AnimatePresence initial={true} mode="wait">
        <Outlet />
      </AnimatePresence>
    </div>
  );
}

export default RootLayout;
