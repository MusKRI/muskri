import { cn } from "@/lib/classes";
import { Nav } from "./nav";

interface HeaderProps extends React.ComponentProps<"header"> {}

export function Header({ className, ...props }: HeaderProps) {
  return (
    <header
      className={cn(
        `fixed top-0 left-0 right-0 z-50 container flex justify-center items-center bg-linear-to-b from-background to-transparent p-4 mx-auto w-full`,
        className
      )}
      {...props}
    >
      <Nav />
    </header>
  );
}
