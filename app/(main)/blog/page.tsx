import Link from "next/link";
import Image from "next/image";

import { client } from "@/lib/contentful";
import { formatDate } from "@/lib/utils";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Charles Acosta's Blog";
  const description = "Explore Charles Acosta's latest blog posts on web development, technology, and more.";
  const url = "https://charlesac.dev/blog";
  const imageUrl = "https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"; 

  return {
    title,
    description,
    openGraph: {
      type: "website", 
      title,
      description,
      url,
      siteName: "Charles Acosta",
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

export default async function Page() {
  const entries = await client.getEntries({
    content_type: "posts",
  });

  return (
    <div className="grid grid-cols-1 sm:place-items-center gap-4">
      {entries.items.length > 0
        ? entries.items.map((entry: any) => {
            return (
              <Link
                href={`/blog/${entry.sys.id}`}
                key={entry.sys.id}
                className="flex sm:flex-col-reverse sm:max-w-[400px] hover:-translate-y-1 transition-all sm:w-full gap-4 justify-between p-8 sm:p-4 cursor-pointer bg-white dark:bg-base2-dark rounded-[20px]"
              >
                <div className="flex flex-col justify-between gap-4 flex-1">
                  <div>
                    <h1 className="font-[600] tracking-tight text-[1.5rem]">
                      {entry.fields.title as string}
                    </h1>
                    <p className="line-clamp-2 text-gray-600 tracking-tight">
                      {entry.fields.summary as string}
                    </p>
                  </div>

                  <div className="text-sm font-[500]">
                    By {entry.fields.author as string} on{" "}
                    {formatDate(entry.sys.createdAt)}
                  </div>
                </div>

                {entry.fields.thumbnail &&
                  entry.fields.thumbnail.fields &&
                  entry.fields.thumbnail.fields.file &&
                  entry.fields.thumbnail.fields.file.url && (
                    <div>
                      <Image
                        src={`https:${entry.fields.thumbnail.fields.file.url}`}
                        width={150}
                        height={100}
                        alt="blog thumbnail"
                        className="sm:w-full sm:h-auto rounded"
                      />
                    </div>
                  )}
              </Link>
            );
          })
        : "More content soon..."}
    </div>
  );
}
