export type IdentityResponse = {
  manifesto: string;
  mermaidCode: string;
  designTokens: {
    typography?: string;
    [key: string]: string | undefined;
  };
  readmeMarkdown: string;
};
