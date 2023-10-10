"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import SignOut from "./sign-out";
import { usePathname } from "next/navigation";
import React from "react";
import { useActivePath } from "@/app/helper";

const NavMenu = () => {
  const { data: session } = useSession();
  const checkActivePath = useActivePath();

  type NavigationItem = {
    href: string;
    name: string;
    icon?: string;
  };  

  const NavMenu: NavigationItem[] = [
    { href: "/dashboard", name: "Dashboard", icon: "dashboard.svg" },
    { href: "/equipments", name: "Equipments", icon: "equipments.svg" },
    { href: "/users", name: "Users", icon: "users.svg" },
  ];

  if (session && session.user?.role === "ADMIN") {
    return (
      <div className="flex flex-row sm:gap-10">
        <div className="sm:w-full sm:max-w-[18rem]">
          <input
            type="checkbox"
            id="sidebar-mobile-fixed"
            className="sidebar-state"
          />
          <label
            htmlFor="sidebar-mobile-fixed"
            className="sidebar-overlay"
          ></label>
          <aside className="sidebar sidebar-fixed-left sidebar-mobile h-full justify-start max-sm:fixed max-sm:-translate-x-full bg-slate-200">
            <section className="sidebar-title items-center p-5">
              <img src="login-logo.svg" alt="logo" width="42" />
              <div className="flex flex-col">
                <span className=" text-slate-800 font-bold">ADMIN</span>
                <span className="text-xs font-normal text-slate-500">Test</span>
              </div>
            </section>
            <section className="sidebar-content">
              <nav className="menu rounded-md">
                <section className="menu-section px-4">
                  <span className="menu-title text-slate-800">Main menu</span>
                  <ul className="menu-items">
                    {NavMenu.map(({ href, name, icon }) => (
                      <Link
                        href={href}
                        className={
                          checkActivePath(href)
                            ? "bg-blue-200 rounded-md active"
                            : ""
                        }
                      >
                        <li
                          key={href}
                          className="menu-item text-slate-800 font-bold hover:bg-slate-300"
                        >
                          <img src={icon} alt="" width={20} />
                          <span>{name}</span>
                        </li>
                      </Link>
                    ))}

                    {/* signOut */}
                    <a href="#">
                      <li className="menu-item  text-slate-800 font-bold hover:bg-slate-300">
                        <img src="signout.svg" alt="" width={20} />
                        <SignOut />
                      </li>
                    </a>
                  </ul>
                </section>
                <div className="divider my-0"></div>
              </nav>
            </section>
          </aside>
        </div>
        <div className="flex w-full flex-col p-4">
          <div className="w-fit">
            <label
              htmlFor="sidebar-mobile-fixed"
              className="btn-primary btn sm:hidden"
            >
              Open Sidebar
            </label>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default NavMenu;
