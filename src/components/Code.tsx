import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import theme from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark';

SyntaxHighlighter.registerLanguage('javascript', js);

export default function Code({ text }: { text: string }) {
  return (
    <SyntaxHighlighter language="javascript" style={theme} showLineNumbers wrapLines>
      {text}
    </SyntaxHighlighter>
  );
}
