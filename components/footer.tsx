import { FaLinkedinIn, FaGithub, FaRegCopyright } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import BuyMeACoffeeButton from "./ui/buymeacoffeebtn";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="max-w-[1000px] w-full flex justify-between items-center">
      <div className="text-sm text-gray-500 tracking-tighter sm:text-xs"><FaRegCopyright className="inline mr-1"/> 2024 - Charles Acosta</div>
      <div className="flex gap-4 items-center text-xl">
        <Link href='https://www.linkedin.com/in/charles-acosta-11124125b/' target="blank"><FaLinkedinIn /></Link>
        <Link href='https://github.com/charlesacosta163' target="blank"><FaGithub /></Link>
        <Link href='mailto:charlesacosta163@gmail.com' target="blank"><MdOutlineEmail /></Link>
        <BuyMeACoffeeButton />
      </div>
    </footer>
  );
};

export default Footer;
