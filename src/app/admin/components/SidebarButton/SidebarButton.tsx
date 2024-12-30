"use client";

import { useSidebarStore } from "@/app/hooks";
import React, { ReactNode } from "react";

type ButtonProps = {
  children?: ReactNode;
  onClickType: "open" | "close" | "toggle";
  className?: string;
};

export default function SidebarButton({
  children,
  onClickType,
  className,
}: ButtonProps) {
  const { openSidebar, closeSidebar, toggleSidebar } = useSidebarStore();

  const handleClick = () => {
    const actions: Record<typeof onClickType, () => void> = {
      open: openSidebar,
      close: closeSidebar,
      toggle: toggleSidebar,
    };

    actions[onClickType]();
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 font-semibold text-white rounded-md hover:shadow-lg transition-all duration-300 ${
        className || "bg-black hover:bg-opacity-80 "
      }`}
    >
      {children}
    </button>
  );
}
