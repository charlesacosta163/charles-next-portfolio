import { client } from "@/lib/contentful";
import Link from "next/link";

export default async function Page() {
  const entries = await client.getEntries({
    content_type: "posts",
  });

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return "Invalid Date"; // Handle invalid dates
    }
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="grid grid-cols-1 sm:place-items-center gap-4">
      {entries.items.map((entry) => {
        return (
          <Link href={`/blog`}  key={entry.sys.id} className="flex sm:flex-col-reverse sm:max-w-[400px] hover:-translate-y-1 transition-all sm:w-full gap-4 justify-between border-t-[1px] border-gray-400 p-4 cursor-pointer">
            <div className="flex flex-col justify-between gap-4 flex-1">
              <div>
                <h1 className="font-bold text-[1.5rem]">{entry.fields.title}</h1>
                <p className="line-clamp-2 text-gray-600 tracking-tight">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi ex aperiam ipsum culpa numquam nesciunt delectus quae
                  quo. Quibusdam dolorem libero, asperiores quaerat officia cum
                  sit modi a culpa commodi accusantium inventore ducimus, quos
                  sed dicta iure repellat. Libero, nam!
                </p>
              </div>

              <div className="text-sm font-[500]">
               By {entry.fields.author} on {formatDate(entry.sys.createdAt)}
              </div>
            </div>

            <div className="">
              <img
                src={`https:${entry.fields.thumbnail.fields.file.url}`}
                alt=""
                className="h-[150px] w-[200px] sm:w-full sm:h-auto rounded"
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
