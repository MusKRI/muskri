import { Suspense } from "react";
import { MDXRemote as NextMDXRemote } from "next-mdx-remote/rsc";
import rehypeShiki from "@shikijs/rehype";
import {
  transformerMetaHighlight,
  transformerMetaWordHighlight,
} from "@shikijs/transformers";
import { transformerMetaDiff } from "@/lib/shiki/transformer-meta-diff";
import { transformerCodeBlock } from "@/lib/shiki/transformer-code-block";
import { mdxComponents } from "./mdx-components";

interface MDXRemoteProps {
  content: string;
}

export const MDXRemote = ({ content }: MDXRemoteProps) => {
  return (
    <Suspense>
      <NextMDXRemote
        source={content}
        components={mdxComponents}
        options={{
          mdxOptions: {
            rehypePlugins: [
              [
                rehypeShiki,
                {
                  themes: {
                    light: "vesper",
                    dark: "vesper",
                  },
                  inline: "tailing-curly-colon",
                  transformers: [
                    transformerMetaDiff(),
                    transformerMetaWordHighlight(),
                    transformerMetaHighlight(),
                    transformerCodeBlock(),
                    // transformerLineNumbers(),
                  ],
                },
              ],
            ],
          },
        }}
      />
    </Suspense>
  );
};
