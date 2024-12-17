declare module '*.md' {
  import type { Attributes } from 'frontmatter-markdown-loader';
  const content: {
    attributes: Attributes;
    react;
  };
  export default content;
}