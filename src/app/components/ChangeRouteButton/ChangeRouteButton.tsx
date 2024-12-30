"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

type ChangeRouteButtonProps = {
  children?: ReactNode;
  route: string;
};

export function ChangeRouteButton({ children, route }: ChangeRouteButtonProps) {
  const router = useRouter();

  function buttonHandlerClick() {
    router.push(route);
  }

  return (
    <button className="button gray" onClick={buttonHandlerClick}>
      {children}
    </button>
  );
}
