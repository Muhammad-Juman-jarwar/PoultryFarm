import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="bg-neutral-900 w-full grid lg:hidden p-10">
        <i
          onClick={handleOpen}
          className={`fa-regular fa-arrow-${
            open ? "left" : "right"
          }-to-line cursor-pointer fa-2xl text-white`}
        ></i>
      </div>
      <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
        <Sidebar isOpen={open} setOpen={handleOpen} />
        <div className="flex flex-col">
          {/* <Header /> */}
          <div className="flex-1 p-4 min-h-0 overflow-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
