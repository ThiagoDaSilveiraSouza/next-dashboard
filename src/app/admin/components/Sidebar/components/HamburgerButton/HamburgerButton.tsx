// components/HamburgerButton.tsx
"use client";

import { useSidebarStore } from "@/app/hooks";

export default function HamburgerButton() {
  const { isOpen, toggleSidebar } = useSidebarStore();

  return (
    <button
      onClick={toggleSidebar}
      className="relative w-5 h-5 flex flex-col justify-center items-center "
    >
      {/* Linha 1 */}
      <div
        className={`w-full h-0.5 bg-white transition-all duration-300 ease-in-out ${
          isOpen ? "rotate-45 absolute" : ""
        }`}
      ></div>

      {/* Linha 2 */}
      <div
        className={`w-full h-0.5 bg-white transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-0" : ""
        }`}
      ></div>

      {/* Linha 3 */}
      <div
        className={`w-full h-0.5 bg-white transition-all duration-300 ease-in-out ${
          isOpen ? "-rotate-45 absolute" : ""
        }`}
      ></div>
    </button>
  );
}
