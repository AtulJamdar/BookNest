import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "../lib/utils"; // Ensure this path matches your shadcn utils

const NavLink = forwardRef(({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
  return (
    <RouterNavLink
      ref={ref}
      to={to}
      className={({ isActive, isPending }) =>
        cn(
          "transition-all duration-200", 
          className, 
          isActive && activeClassName, 
          isPending && pendingClassName
        )
      }
      {...props}
    />
  );
});

NavLink.displayName = "NavLink";
export { NavLink };