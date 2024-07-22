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
      className="markdown leading-6 sm:[&>blockquote]:p-4 sm:[&>blockquote]:text-xs sm:[&>blockquote]:leading-6
        [&>blockquote]:bg-gradient-to-br
        [&>blockquote]:from-[#7F9FFF]
        [&>blockquote]:to-[#324AB2]"
    />
  );
};

export default MarkedComponent;