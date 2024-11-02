import { progLogos } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me - Charles Acosta",
  description: "My background with my programming journey, and the technologies I use."
}

const About = () => {
  return (
    <div className="flex flex-col gap-8">
      <section>
        <h1 className="text-[2rem] tracking-tight font-semibold">About 👨‍💻</h1>

        <p className="mt-4 space-y-6 leading-relaxed font-medium text-gray-500 dark:text-gray-400 sm:text-sm sm:leading-6 shadow-xl bg-white dark:bg-base2-dark p-8 sm:p-6 rounded-[20px] ">
          I'm a third-year Computer Science student with a passion for web
          development that started back in my second semester of college. Since then, I've
          dived deep into JavaScript and full-stack development, working a lot
          with the MERN stack and then later adapting on to larger projects using Next.js. I
          love the process of bringing ideas to life on the web, whether it’s
          recreating unique UI designs or building something entirely from
          scratch. <br /> <br />
          Lately, I’ve also been expanding my skills with TypeScript, exploring
          backend tools like Appwrite, and working with content management
          systems like Contentful. My goal is to grow into a Front-end or
          Full-stack Developer, and eventually launch a software as a service of my own.
           For me, it’s all about learning, improving, and creating
          products that are intuitive and impactful for users.
        </p>
      </section>

      <section>
        <h1 className="text-[2rem] tracking-tight font-semibold">Skills 🛠️</h1>

        <div className="grid grid-cols-4 sm:grid-cols-2 gap-4 sm:gap-2 mt-4">
          {progLogos.map((e) => {
            return (
              <div
                key={e.id}
                className="flex items-center duration-200 bg-white hover:scale-105 gap-4 dark:bg-base2-dark px-4 py-3 rounded-[20px] border-[1px] border-gray"
              >
                <img src={e.link} alt="" className="w-[30px] h-[30px]" />
                <span className="merriweather-light tracking-tight text-sm">
                  {e.name}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default About;
