"use client";

import { BsFileCode, BsFolder2 } from "react-icons/bs";

import { useCopyToClipboard } from "@/core/hooks/use-copy-to-clipboard";
import { LANGUAGE_FILE_ICONS } from "@/lib/shiki/file-icons";
import { cn } from "@/lib/classes";

type Props = React.ComponentProps<"pre"> & {
  "data-code"?: string;
  "data-language"?: string;
  "data-filename"?: string;
  "data-no-copy"?: true;
};

export function CodeBlock({ children, className, ...props }: Props) {
  const code = props["data-code"];
  const language = props["data-language"];
  const filename = props["data-filename"];
  const noCopy = props["data-no-copy"];

  const filePaths = filename ? filename.split("/") : [];
  const LanguageIcon = language
    ? LANGUAGE_FILE_ICONS.get(language) ?? BsFileCode
    : BsFileCode;

  const { copiedText, copyToClipboard, idle } = useCopyToClipboard();

  return (
    <figure className="group/code-block rounded-xl offset-border">
      {filePaths.length > 0 ? (
        <figcaption
          className="Files flex items-center justify-between rounded-t-xl
            bg-neutral-800 px-3 py-2 text-xs text-neutral-400"
        >
          <div className="flex items-center gap-x-0.5">
            {filePaths.map((name, index) => {
              const isLast = index === filePaths.length - 1;
              return (
                <span
                  key={`${name}-${index}`}
                  className={cn(
                    "inline-flex items-center gap-x-0.5",
                    isLast ? "text-foreground" : ""
                  )}
                >
                  {filePaths.length > 1 &&
                    (!isLast ? (
                      <BsFolder2
                        size={16}
                        aria-hidden="true"
                        className="text-neutral-400"
                      />
                    ) : null)}
                  {name}
                  {!isLast && <span>/</span>}
                </span>
              );
            })}
          </div>
          {language && <LanguageIcon className="size-4" />}
        </figcaption>
      ) : null}
      <div
        className={cn(
          "relative overflow-hidden",
          `[--clr:#151515]`,
          "before:absolute before:left-0 before:top-0 before:bottom-0 before:rounded-tl-xl [.Files+&]:before:rounded-tl-none before:rounded-bl-xl before:w-8 before:bg-gradient-to-r before:from-[var(--clr)] before:to-transparent before:z-10 before:pointer-events-none",
          "after:absolute after:right-0 after:top-0 after:bottom-0 after:rounded-tr-xl [.Files+&]:after:rounded-tr-none after:rounded-br-xl after:w-8 after:bg-gradient-to-l after:from-[var(--clr)] after:to-transparent after:z-10 after:pointer-events-none",
          "[&>pre]:scrollbar-thin [&>pre]:scrollbar-track-surface-3/30 [&>pre]:scrollbar-thumb-surface-7/50",
          "[&>pre]:hover:scrollbar-thumb-surface-8/60"
        )}
      >
        <pre
          {...props}
          className={cn(
            className,
            `not-prose relative overflow-auto rounded-xl border
            border-neutral-800 bg-neutral-900! px-4 py-3 text-sm font-mono ${
              filename ? "mt-0 rounded-t-none" : ""
            }`
          )}
        >
          {children}
        </pre>
        {code && !noCopy ? (
          <button
            className={`absolute top-2 right-2 rounded-md bg-neutral-800 p-2
              py-1.5 text-right font-sans text-xs text-neutral-400 opacity-0
              shadow-sm transition-all group-hover/code-block:opacity-100
              focus:opacity-100 ${
                idle ? "cursor-pointer hover:text-neutral-300" : ""
              }
              active:bg-neutral-700`}
            disabled={!idle}
            onClick={() => {
              copyToClipboard(code);
              // track("copy-code-block", {
              //   code,
              // });
            }}
            aria-label={idle ? "Copy code to clipboard" : "Code copied"}
            title={idle ? "Copy code to clipboard" : "Code copied"}
            tabIndex={0}
          >
            {copiedText}
          </button>
        ) : null}
      </div>
    </figure>
  );
}
