"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { FilloutPopupEmbed } from "@fillout/react";

type FilloutContextType = {
  openFillout: () => void;
  closeFillout: () => void;
};

const FilloutContext = createContext<FilloutContextType | null>(null);

export function FilloutProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openFillout = () => {
    setIsOpen(true);

    // Set the URL to #apply when the form opens
    window.history.replaceState(null, "", "/#apply");
  };

  const closeFillout = () => {
    setIsOpen(false);

    // Return the URL to the root
    window.history.replaceState(null, "", "/");
  };

  useEffect(() => {
    const checkApplyHash = () => {
      if (window.location.hash === "#apply") {
        setIsOpen(true);
      }
    };

    checkApplyHash();

    window.addEventListener("hashchange", checkApplyHash);
    window.addEventListener("popstate", checkApplyHash);

    return () => {
      window.removeEventListener("hashchange", checkApplyHash);
      window.removeEventListener("popstate", checkApplyHash);
    };
  }, []);

  return (
    <FilloutContext.Provider
      value={{
        openFillout,
        closeFillout,
      }}
    >
      {children}

      <FilloutPopupEmbed
        filloutId="vtGEpvwHbpus"
        isOpen={isOpen}
        onClose={closeFillout}
      />
    </FilloutContext.Provider>
  );
}

export function useFillout() {
  const context = useContext(FilloutContext);

  if (!context) {
    throw new Error("useFillout must be used inside FilloutProvider");
  }

  return context;
}