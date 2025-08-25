"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

import { cn } from "@/lib/classes";
import { NavMenu } from "@/data/nav-menu";

export function Nav() {
  const pathname = usePathname();
  const parsedNavMenu = useMemo(() => {
    return NavMenu.map((item) => ({
      ...item,
      isActive: pathname === item.path,
    }));
  }, [pathname]);

  return (
    <nav className="max-w-lg w-fit border border-border rounded-[12px] bg-background/80 h-fit shadow-lg backdrop-blur-sm p-1">
      <ul className="flex items-center gap-2">
        {parsedNavMenu.map((item) => (
          <li key={item.name} className={cn("overflow-hidden shrink-0")}>
            <Link
              href={item.path}
              className={cn(
                "flex items-center gap-2 px-2 py-1 rounded-[8px] [transition:background-color_0.1s_ease-out]",
                item.isActive ? "bg-neutral-800" : "hover:bg-neutral-800/40"
              )}
            >
              <item.icon
                className={cn(
                  "size-4",
                  item.isActive ? "text-foreground" : "text-foreground/70"
                )}
              />
              <span
                className={cn(
                  "text-sm",
                  item.isActive ? "text-neutral-200" : "text-muted-foreground"
                )}
              >
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
