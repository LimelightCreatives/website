"use client";

import { usePathname } from "next/navigation";

export function HideOnRoutes({
  routes,
  children,
}: {
  routes: string[];
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return routes.includes(pathname) ? null : <>{children}</>;
}