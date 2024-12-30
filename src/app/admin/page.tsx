"use client";

import { AuthModal } from "./components";
import SidebarButton from "./components/SidebarButton/SidebarButton";
import { useAuthStore } from "./hooks";

export default function AdminPage() {
  const { isAuth, logout } = useAuthStore();

  return (
    <>
      <AuthModal />
      {isAuth && (
        <div className="h-screen w-screen flex justify-center items-center gap-2">
          <SidebarButton onClickType="toggle">Abrir menu</SidebarButton>

          <button className="button.red" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </>
  );
}
