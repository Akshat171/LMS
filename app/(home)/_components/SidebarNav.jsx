"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Search, Layout, Mail, Shield } from "lucide-react";
const SidebarNav = () => {
  const menuList = [
    {
      id: 1,
      name: "Browse",
      icon: Search,
      path: "/browse",
    },
    {
      id: 2,
      name: "Dashboard",
      icon: Layout,
      path: "/dashboard",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
      path: "/upgrade",
    },
    {
      id: 4,
      name: "Newsletter",
      icon: Mail,
      path: "/newsletter",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="h-full bg-white border-r flex flex-col overflow-y-auto shadow-md">
      <div className="p-5 border-b z-50">
        {" "}
        <Image src="/logo.png" alt="logo" width={200} height={110} />
      </div>
      <div className="flex flex-col">
        {menuList.map((item, index) => (
          <div
            className={`flex gap-2 items-center p-4 px-6 text-gray-500 cursor-pointer hover:bg-gray-100 ${
              activeIndex == index ? "bg-purple-15 text-purple-800" : null
            } `}
            onClick={() => setActiveIndex(index)}
          >
            <item.icon />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarNav;
