import { FaLinkedinIn, FaFacebook, FaTwitter } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-4 py-8">
      <div>
        <img
          src="https://media.licdn.com/dms/image/D4E03AQEq8tPssqQpyg/profile-displayphoto-shrink_200_200/0/1701623784515?e=2147483647&v=beta&t=j-qKFNljs6chnHCmrWiz2Pq2sdTpW4XKexS8TNoZmfg"
          alt=""
          className="w-[150px] h-[150px] rounded-full shadow"
        />
      </div>

      <div className="flex flex-col items-center gap-4 bg-white dark:bg-base2-dark p-8 sm:p-4 rounded-[20px]">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-[3rem] font-[900] sm:text-[1.75rem] tracking-tighter">
            Hello, I'm Charles 🙋
          </h1>
          <p className="text-gray-600 tracking-tight sm:text-xs">
            A self taught developer specializing in creating and designing eye
            catching user interfaces
          </p>
        </div>

        <div className="flex gap-4 items-center ">
          <Link href="/about">
            <Button className="text-xl sm:text-sm p-6 sm:p-4 transition-all bg-base2 dark:bg-body-dark dark:text-text-dark rounded-full text-[#06287F] hover:scale-105 tracking-tighter">
              😊 About Me
            </Button>
          </Link>

          <Link href="/projects">
            <Button className="text-xl sm:text-sm p-6 sm:p-4 transition-all bg-base1 rounded-full shadow-lg hover:scale-105 text-text-dark tracking-tighter">
              {" "}
              💻 Projects
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
