import { progLogos } from "@/lib/data";

const About = () => {
  return (
    <div className="flex flex-col gap-8">
      <section>
        <h1 className="text-[3rem] tracking-tighter">About 👨‍💻</h1>

        <p className="mt-4 leading-8 sm:leading-9 sm:text-sm bg-white dark:bg-base2-dark p-8 sm:p-6 rounded-[20px] ">
          I am currently a third-year Computer Science student, with a strong foundation in JavaScript and extensive
          experience in full-stack development utilizing the MERN stack.
          Additionally, I have applied Next.js for larger-scale projects. My
          journey in web development began at the end of my second semester,
          where I discovered a passion for recreating various UI designs and
          developing side projects to enhance my skills and benefit my personal
          growth. <br /><br />
          My career goal is to become a Front-end or Full-stack Developer, with
          aspirations of pursuing a Bachelor’s Degree in the field. I am dedicated
          to continuously expanding my proficiency in various technologies,
          applying my knowledge in real-world scenarios, and delivering
          high-quality products that provide value to users.
        </p>
      </section>

      <section>
        <h1 className="text-[3rem] tracking-tighter">Skills 🛠️</h1>

        <div className="grid grid-cols-4 sm:grid-cols-2 gap-4 sm:gap-2 mt-4">
          {progLogos.map((e) => {
            return (
              <div
                key={e.id}
                className="flex items-center duration-200 bg-white hover:scale-105 gap-4 dark:bg-base2-dark px-4 py-3 rounded"
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
