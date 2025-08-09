import * as React from "react";
import { MDXComponents } from "mdx/types";
import Link from "next/link";

import { cn } from "@/lib/classes";
import { LinkedHeading } from "./linked-heading";
import { CodeBlock } from "./components/code-block";

export const mdxComponents: MDXComponents = {
  h1: (props) => <LinkedHeading level={1} {...props} />,
  h2: (props) => <LinkedHeading level={2} {...props} />,
  h3: (props) => <LinkedHeading level={3} {...props} />,
  h4: (props) => <LinkedHeading level={4} {...props} />,
  h5: (props) => <LinkedHeading level={5} {...props} />,
  h6: (props) => <LinkedHeading level={6} {...props} />,
  a: ({ href, ...props }) => {
    const isExternalLink = href?.startsWith("http");
    return (
      <Link
        href={href ?? ""}
        prefetch={isExternalLink}
        target={isExternalLink ? "_blank" : "_self"}
        rel={isExternalLink ? "noreferrer" : "noopener"}
        {...props}
      />
    );
  },
  pre: (props) => <CodeBlock {...props} />,
};
