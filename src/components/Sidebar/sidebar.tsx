import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FlowerIcon, DropDownIcon, NavDropdownIcon } from "../../assets/icons";
import { menuItems } from "./utils";
import {
  ChevronIcon,
  HamburgerIcon,
  CloseIcon,
} from "../../assets/icons/sidebar/sidebarIcons";

const Sidebar = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div>
      <div className="lg:hidden p-4 w-full h-[4.4rem] bg-white flex items-center justify-between">
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
        <div className="flex w-auto items-center justify-between gap-2.5">
          <div className="flex w-auto items-start justify-between gap-2.5">
            <p className="text-[#A8A8A8] text-base font-medium leading-5 flex flex-col items-end">
              Sarah Shaibu
              <span className="text-[12px]/[15px] text-[#EC681C] font-semibold">
                Customer Service
              </span>
            </p>
            <img
              src="/images/avatar.png"
              alt="avatar"
              className="w-[2.75rem] h-[2.75rem]"
            />
          </div>
          <NavDropdownIcon />
        </div>
      </div>

      <div
        className={`w-52 h-screen flex flex-col pt-8 bg-white gap-[32px] fixed top-0 left-0 z-50 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:static lg:translate-x-0 lg:flex`}
      >
        <div className="w-full h-full flex flex-col gap-x-8">
          <button
            className="lg:hidden mt-[-19px] mx-4 mb-2"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {<CloseIcon />}
          </button>
          <div className="w-full h-14 px-4">
            <div className="w-full bg-Orange-100 h-full rounded-lg p-3 flex items-start justify-between">
              <h2 className="text-[14px]/[16px] font-bold text-white">
                General <br /> Dashboard
              </h2>
              <DropDownIcon />
            </div>
          </div>
          <div className="flex flex-col mt-4">
            {menuItems.map((item, index) => (
              <div key={index}>
                <Link
                  to={item?.path ?? ""}
                  className={`flex items-center p-4 ${
                    isActive(item?.path ?? "")
                      ? "bg-gray-700 border-l-4 border-[#FF6600] bg-[#FDEFE7] text-[#505050] font-bold text-[14px]/[16.5px]"
                      : "text-[#505050] text-opacity-50 font-bold text-[14px]/[16.5px]"
                  }`}
                  onClick={() =>
                    item.subItems && setIsDashboardOpen(!isDashboardOpen)
                  }
                >
                  <span className="mr-3">
                    {item.linkIcon(
                      item.activeState.includes(location.pathname)
                        ? "active"
                        : ""
                    )}
                  </span>
                  {item.name}
                  {item.subItems && (
                    <span className="ml-auto">
                      <ChevronIcon type={isDashboardOpen ? "active" : ""} />
                    </span>
                  )}
                </Link>
                {isDashboardOpen && item.subItems && (
                  <div className="ml-8">
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        className={`block p-2 ${
                          isActive(subItem.path)
                            ? "bg-gray-700 border-l-4 border-red-500 text-[#505050] font-bold text-[14px]/[16.5px]"
                            : "text-[#505050] text-opacity-50 font-bold text-[14px]/[16.5px]"
                        }`}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <FlowerIcon />
      </div>
    </div>
  );
};

export default Sidebar;
