"use client";
import { useSidebarStore } from "@/app/hooks";
import HamburgerButton from "./components/HamburgerButton/HamburgerButton";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Sidebar() {
  const { isOpen, toggleSidebar } = useSidebarStore();
  const router = useRouter();

  function redirectHandlerClick(redirectPath: string = "/") {
    router.push(redirectPath);
    toggleSidebar();
  }

  return (
    <div className="fixed left-0 top-0 flex h-screen">
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={toggleSidebar}
        ></div>
      )}
      <div
        className={`fixed top-0 left-0 flex flex-col h-full w-64 bg-gray-800 text-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4 font-bold text-xl border-b border-gray-700 flex justify-between items-center">
          Menu Lateral
          <HamburgerButton />
        </div>
        <nav className="flex-1 p-4 flex flex-col justify-between">
          <div>
            <ul className="space-y-4">
              <li className="hover:text-blue-400 cursor-pointer">
                <Link href="/admin">Página Inicial</Link>
              </li>
              <li className="hover:text-blue-400 cursor-pointer">
                <Link href="/admin/produtos">Produtos</Link>
              </li>
            </ul>
          </div>
          <div
            className="flex gap-2 items-center justify-end cursor-pointer text-white hover:text-red-600"
            onClick={() => redirectHandlerClick()}
          >
            <FaLongArrowAltLeft className="" />
            Sair
          </div>
        </nav>
      </div>
    </div>
  );
}
