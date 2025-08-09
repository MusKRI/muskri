import Link from "next/link";

import { cn } from "@/lib/classes";
import { SOCIAL_MEDIA_PROFILES } from "@/data/social-profies";
import { LEGAL_SITES } from "@/data/legal-sites";

export default function Footer({
  className,
  ...props
}: React.ComponentProps<"footer">) {
  return (
    <footer
      className={cn(
        "relative border-t border-neutral-800 bg-neutral-900 p-3 text-sm md:p-2",
        className
      )}
      {...props}
    >
      <div
        className="relative container px-4 mx-auto flex flex-wrap items-center
          justify-between gap-3 max-sm:flex-col"
      >
        <p className="grow max-sm:order-2">
          <span className="text-white/60">
            Copyright © {new Date().getFullYear()}
          </span>
          <span className="text-white/60"> - </span>
          Krishna Saini
        </p>
        <nav
          className="rounded-full border border-neutral-700 bg-neutral-800 px-2
            py-1.5"
        >
          <menu className="flex gap-2">
            {SOCIAL_MEDIA_PROFILES.map(({ href, name, logo: Logo }) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                className="text-white/60 hover:text-white"
                // onClick={() =>
                //   track("footer-social-link", {
                //     name,
                //   })
                // }
              >
                <span className="sr-only">Link to {name} profile</span>
                <Logo size={20} />
              </Link>
            ))}
          </menu>
        </nav>
        <nav className="flex grow justify-end">
          <menu className="flex gap-2">
            {LEGAL_SITES.map(({ href: link, name }) => (
              <Link
                key={link}
                href={link}
                className="text-muted-foreground hover:text-foreground"
              >
                {name}
              </Link>
            ))}
          </menu>
        </nav>
      </div>
    </footer>
  );
}
