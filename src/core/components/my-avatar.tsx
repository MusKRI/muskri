import { cn } from "@/lib/classes";
import Me from "@/assets/me.jpg";

interface MyAvatarProps extends React.ComponentProps<"img"> {}

export function MyAvatar({ className, ...props }: MyAvatarProps) {
  return (
    <img
      src={Me.src}
      className={cn("object-cover rounded-xl", className)}
      alt="Avatar"
      width={400}
      height={400}
      title="Profile image"
      {...props}
    />
  );
}
