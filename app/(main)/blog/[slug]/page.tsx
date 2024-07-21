import { client } from "@/lib/contentful";
import MarkedComponent from "@/components/marked";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  const article = (await client.getEntry(slug)) as any;

  const title = article.fields.title as string;
  const description = article.fields.summary as string;
  const imageUrl = article.fields.thumbnail?.fields.file.url as string;

  return {
    title,
    description,
    openGraph: {
      type: 'article',
      title,
      description,
      url: `https://charlesac.dev/blog/${slug}`,
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 600,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const article = (await client.getEntry(slug)) as any;

  const content = article.fields.content as string;

  return (
    <div className="max-w-[800px] w-full bg-white dark:bg-base2-dark p-8 sm:px-4 rounded-[20px] sm:text-sm">
      <section className="flex flex-col sm:gap-4">
        <h1 className="text-[2em] sm:[1.5rem] font-[600] tracking-tight sm:leading-8">
          {article.fields.title}
        </h1>
        <p className="text-sm italic">by {article.fields.author}</p>
      </section>
      <Image
        src={`https:${article.fields.thumbnail.fields.file.url}`}
        width={2000}
        height={100}
        alt="blog thumbnail"
        className="sm:w-full sm:h-auto rounded mt-4"
      />

      <MarkedComponent source={content} />

      <div className="text-xs font-[500]">
        Published on {formatDate(article.sys.createdAt)}
      </div>
    </div>
  );
}
