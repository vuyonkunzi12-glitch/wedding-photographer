import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },

  outputFileTracingIncludes: {
    // Key is the route path; glob is relative to project root
    '/': ['./content/shoots/**/*'],
    '/work': ['./content/shoots/**/*'],
    '/work/[slug]': ['./content/shoots/**/*'],
  },
  
};

const withMDX = createMDX({
  // By default only .mdx is compiled; uncomment the line below if you also want .md
  extension: /\.(md|mdx)$/,
  options: {
    // If you need GFM (tables, strikethrough) in the future, add remark-gfm here
    // Under Turbopack, plugin names must be passed as strings
  },
})

export default withMDX(nextConfig)
