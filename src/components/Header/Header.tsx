"use client";
import Link from "next/link";
import React from "react";
//* icons
import { FiMenu } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

const links = [
  { title: "Home", route: "/" },
  { title: "Create", route: "/invites/create" },
  { title: "About", route: "/about" },
];

const Header = ({
  showSidePanel,
  setShowSidePanel,
}: {
  showSidePanel: boolean;
  setShowSidePanel: (state: boolean) => void;
}) => {
  return (
    <div className="sticky top-0 h-12 w-full bg-zinc-800 text-white">
      <div className="flex items-center justify-between p-3">
        <button
          className="block rounded-md border border-zinc-400 p-1 hover:opacity-70 lg:hidden"
          onClick={() => setShowSidePanel(!showSidePanel)}
        >
          <FiMenu />
        </button>
        <h1 className="hidden font-bold lg:block">InviteApp</h1>
        {/* links */}
        <div className="flex gap-3">
          {links.map((link, index) => (
            <Link key={index} href={link.route} className="hover:underline">
              {link.title}
            </Link>
          ))}
        </div>
        {/* burger */}
        <button>
          <FiUser />
        </button>
      </div>
    </div>
  );
};

export default Header;
