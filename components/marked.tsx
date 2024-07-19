import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import remarkBreaks from 'remark-breaks';

const MarkedComponent = ({ source }: { source: string }) => {
  return (
    <ReactMarkdown
      children={source}
      remarkPlugins={[remarkGfm, remarkBreaks]}
      rehypePlugins={[rehypeRaw]}
      className="markdown leading-8"
    />
  );
};

export default MarkedComponent;