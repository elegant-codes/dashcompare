"use client";
import {
  ArrowLeft,
  Category,
  ArrowDown2,
  Shop,
  Tag2,
  StatusUp,
  Moneys,
  ArrowSwapHorizontal,
  People,
  Profile2User,
  Setting2,
  LogoutCurve,
} from "iconsax-react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth";

const Index = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const router = useRouter();
  const Menus = [
    { title: "Dashboard", icon: <Category size="16" /> },
    { title: "Sales", icon: <Shop size="16" />, spacing: true },
    { title: "Products", icon: <Tag2 size="16" /> },
    {
      title: "Report",
      icon: <StatusUp size="16" />,
      submenu: true,
      submenuItems: [
        { title: "2021-2022" },
        { title: "2022-2023" },
        { title: "2023-2024" },
      ],
    },
    { title: "Data", icon: <Moneys size="16" />, spacing: true },

    {
      title: "Customers",
      icon: <People size="16" />,
      spacing: true,
    },
    { title: "User Management", icon: <Profile2User size="16" /> },
    { title: "Settings", icon: <Setting2 size="16" />, comingsoon: true },
    {
      title: "Logout",
      icon: <LogoutCurve size="16" />,
      spacing: true,
      logOut: true,
    },
  ];

  const { logout } = useAuth();

  return (
    <div
      className={cn(
        "relative h-screen p-5 pt-8 text-sm bg-abn-900 text-abn-300 w-72 duration-300 shrink-0",
        {
          "w-20": !open,
          "w-72": open,
        }
      )}
    >
      {/* Arrow for Opening Sidebar */}
      <div
        className={cn(
          "absolute flex items-center justify-center w-8 h-8 text-3xl bg-white border-2 rounded-full cursor-pointer text-abn-900 -right-3 top-9 border-abn-900",
          !open && "rotate-180"
        )}
        onClick={() => setOpen(!open)}
      >
        <ArrowLeft size="20" color="#060606" />
      </div>

      {/* Logo */}
      <div className="inline-flex">
        <h1
          className={cn(
            "text-3xl font-bold cursor-pointer duration-500",
            !open && "scale-0"
          )}
          onClick={() => router.push("/")}
        >
          {open ? "DashCompare" : ""}
        </h1>
      </div>

      {/* Menus */}
      <ul className="pt-2">
        {Menus.map((menu, index) => (
          <React.Fragment key={index}>
            <li
              className={cn(
                "text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-abn-800 rounded-[6px]  hover:text-abgp-500 ",
                menu.spacing ? "mt-9" : "mt-3"
              )}
              onClick={() => menu?.logOut && logout()}
            >
              <span className="block float-left ">
                {menu.icon ? menu.icon : <Category size="16" />}
              </span>
              <span
                className={cn(
                  "flex-1 text-sm font-medium duration-200",
                  !open && "hidden"
                )}
              >
                {menu.title}
              </span>

              {menu.comingsoon && open && (
                <div className=" p-2 rounded-[100px] border h-5 border-yellow-500 justify-center items-center gap-2 inline-flex">
                  <div className="text-yellow-500 text-[10px] font-medium font-['Inter']">
                    Coming Soon
                  </div>
                </div>
              )}

              {menu?.submenu && open && (
                <span
                  className={cn(submenuOpen && "rotate-180")}
                  onClick={() => setSubmenuOpen(!submenuOpen)}
                >
                  <ArrowDown2 size="16" />
                </span>
              )}
            </li>
            {menu.submenu && submenuOpen && open && (
              <ul>
                {menu.submenuItems.map((submenu, index) => (
                  <li
                    key={index}
                    className="text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-abn-800 rounded-[6px] hover:text-abgp-500"
                  >
                    {submenu.title}
                  </li>
                ))}
              </ul>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Index;
