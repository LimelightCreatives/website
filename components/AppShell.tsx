"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Swap this for a real readiness signal whenever you have one
    // (fonts loaded, an initial fetch resolving, images preloaded, etc.)
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen visible={loading} />
      {children}
    </>
  );
}

export default AppShell;
