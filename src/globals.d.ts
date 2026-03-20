declare module '*.md' {
  import type { Attributes } from 'frontmatter-markdown-loader';
  const content: {
    attributes: Attributes;
    react;
  };
  export default content;
}

declare global {
  interface Window {
    netlifyIdentity?: {
      on(event: string, callback: (...args: unknown[]) => void): void;
    };
  }
}

export {};
