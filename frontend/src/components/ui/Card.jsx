import React from "react";
import clsx from "clsx";

export default function Card({ className = "", children, ...props }) {
  return (
    <div
      className={clsx(
        "bg-card/80 backdrop-blur-xs shadow-card rounded-xl border border-border p-6 transition hover:shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
