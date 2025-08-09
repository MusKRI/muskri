# Personal portfolio website

Source code for my personal portfolio website. The site showcases my projects and gives an insight into my background, my passion for web development and design, and the technologies I work with.

<a href="https://www.muskri.com">
  <img alt="Personal portfolio website of Krishna" src="https://github.com/MusKRI/muskri/blob/main/public/images/og.png">
</a>

## ✨ Features

- **Modern stack**: [Next.js 15](https://nextjs.org/) (App Router) + [React 19](https://react.dev/) + [TypeScript 5](https://www.typescriptlang.org/).
- **Homepage**: A concise intro with featured projects, skills, work experience, and contact information.
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with [`@tailwindcss/typography`](https://github.com/tailwindlabs/tailwindcss-typography) for beautiful prose.
- **Content & blog**: MDX via [`next-mdx-remote`](https://github.com/hashicorp/next-mdx-remote), file‑system content in `src/content/blogs`, Zod‑validated frontmatter, and automatic reading‑time.
- **Code highlighting**: [Shiki v3](https://shiki.style/) with custom transformers (filename, copy‑to‑clipboard, line numbers, and diff highlighting) and language/file icons.
- **Animations**: Smooth page and UI transitions powered by Motion v12.
- **Fonts**: Optimized Google fonts via `next/font` (Geist, Inter, Barlow, Noto Sans Mono).
- **SEO & social**: Rich metadata, Open Graph/Twitter cards, canonical URLs, and a web manifest with icons.
- **Analytics & performance**: Built‑in [Vercel Analytics](https://vercel.com/analytics) and [Speed Insights](https://vercel.com/docs/speed-insights). Fast local DX with Turbopack.
