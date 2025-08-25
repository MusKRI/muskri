type LegalSite = {
  name: string;
  href: string;
};

export const LEGAL_SITES = [
  {
    name: "Privacy Policy",
    href: "#",
  },
  {
    name: "Legal Notice",
    href: "#",
  },
] as const satisfies LegalSite[];
