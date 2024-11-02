import { projectsData } from "@/lib/data";
import { FaGithub, FaCode } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Projects - Charles Acosta",
  description: "All of my web projects displayed here."
}

const Projects = () => {
  return (
    <div>
      <h1 className="text-[2rem] tracking-tight font-semibold">Projects 💻</h1>

      <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 mt-4">
        {projectsData.map((e, i) => {
          return (
            <section key={i} className="flex flex-col rounded-[25px] shadow-md">
              <div className="w-full">
                <Image
                  src={e.imageLink}
                  className="w-full h-[225px] sm:h-full rounded-t-[25px]"
                  alt="Image of Project"
                />
              </div>

              <div className="p-4 flex flex-col h-full justify-between gap-4 bg-base2 dark:bg-base2-dark rounded-b-[25px]">
                <div>
                  <div className="flex justify-between items-center">
                    <h2 className="text-[2rem] sm:text-[1.5rem] font-bold text-[#06287F] dark:text-text-dark tracking-tighter">
                      {e.projectName}
                    </h2>
                    <div className="flex gap-2 items-center self-start">
                      {e.githubLink && (
                        <Link
                          target="blank"
                          href={e.githubLink}
                          className="bg-gray-300 dark:bg-gray-700 text-white p-2 rounded-full font-bold tracking-tight shadow-md"
                        >
                          <FaGithub className="text-2xl" />
                        </Link>
                      )}

                      {e.demoLink && (
                        <Link
                          target="blank"
                          href={e.demoLink}
                          className="bg-gray-300 dark:bg-gray-700 text-white p-2 rounded-full font-bold tracking-tight shadow-md"
                        >
                          <FaCode className="text-2xl" />
                        </Link>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 tracking-tight mt-2">
                    {e.description}
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex gap-2 items-center">
                    {e.technologies.map((link) => (
                      <img src={link} className="w-[30px] h-[30px] rounded" />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
