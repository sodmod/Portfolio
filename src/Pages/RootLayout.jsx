import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function RootLayout() {
  return (
    <>
      <Navbar />
      <AnimatePresence initial={true} mode="wait">
        <Outlet />
      </AnimatePresence>
    </>
  );
}

export default RootLayout;
