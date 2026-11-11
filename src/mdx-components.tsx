// mdx-components.tsx
import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(): MDXComponents {
  return {
    h2: (props) => <h2 className="font-display text-2xl text-jacaranda-800 mt-8 mb-4" {...props} />,
    p: (props) => <p className="font-sans text-ink/80 leading-relaxed mb-4" {...props} />,
    a: (props) => <a className="text-jacaranda-600 underline hover:text-jacaranda-700" {...props} />,
  }
}