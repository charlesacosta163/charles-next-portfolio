import { projectsData } from "@/lib/data";
import { FaGithub, FaCode } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div>
      <h1 className="text-[3rem] tracking-tighter">Projects 💻</h1>

      <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 mt-4">
        {projectsData.map((e) => {
          return (
            <section className="flex flex-col rounded-[25px] shadow">
              <div className="w-full">
                <Image
                  src={e.imageLink}
                  className="w-full h-[225px] sm:h-full rounded-t-[25px]"
                  alt="Image of Project"
                />
              </div>

              <div className="p-4 flex flex-col h-full justify-between gap-4 bg-base2 dark:bg-[#1f112d] rounded-b-[25px]">
                <div>
                  <h2 className="text-[2rem] font-bold text-[#06287F] dark:text-text-dark tracking-tighter">
                    {e.projectName}
                  </h2>
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
                  <div className="flex gap-2 items-center">
                    {e.githubLink && (
                    <Link target="blank" href={e.githubLink} className="bg-base1 text-white p-2 rounded-full font-bold tracking-tight">
                      <FaGithub className="text-2xl" />
                    </Link>

                    )}

                    {e.demoLink && (
                    <Link target="blank" href={e.demoLink} className="bg-base1 text-white p-2 rounded-full font-bold tracking-tight">
                      <FaCode className="text-2xl" />
                    </Link>

                    )}
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
