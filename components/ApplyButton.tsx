"use client";

import { useFillout } from "@/components/FilloutProvider";

type ApplyButtonProps = {
  children?: React.ReactNode;
  className?: string;
};

export function ApplyButton({
  children = "Register Interest →",
  className,
}: ApplyButtonProps) {
  const { openFillout } = useFillout();

  return (
    <button
      type="button"
      onClick={openFillout}
      className={className}
    >
      {children}
    </button>
  );
}