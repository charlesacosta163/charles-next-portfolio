declare module 'react-syntax-highlighter' {
    import { ComponentType, CSSProperties } from 'react';
  
    export interface SyntaxHighlighterProps {
      language?: string;
      style?: any;
      children?: string;
      customStyle?: CSSProperties;
    }
  
    const Prism: ComponentType<SyntaxHighlighterProps>;
    const Light: ComponentType<SyntaxHighlighterProps>;
    const registerLanguage: (name: string, func: any) => void;
  
    export { Prism, Light, registerLanguage };
  }
  
  declare module 'react-syntax-highlighter/dist/esm/styles/prism' {
    const dracula: any;
    export { dracula };
  }
  