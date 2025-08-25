import { SVGProps } from "react";

export function HomeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2.364 12.958c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183s.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093z" />
        <path strokeLinecap="round" d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1" />
      </g>
    </svg>
  );
}

export function BlogIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M10 21H5c-1.11 0-2-.89-2-2V5c0-1.11.89-2 2-2h14c1.11 0 2 .89 2 2v5.33c-.3-.12-.63-.19-.96-.19c-.37 0-.72.08-1.04.23V5H5v14h5.11l-.11.11zM7 9h10V7H7zm0 8h5.11L14 15.12V15H7zm0-4h9.12l.88-.88V11H7zm14.7.58l-1.28-1.28a.55.55 0 0 0-.77 0l-1 1l2.05 2.05l1-1a.55.55 0 0 0 0-.77M12 22h2.06l6.05-6.07l-2.05-2.05L12 19.94z"
      />
    </svg>
  );
}
